from pdf2image import convert_from_path
import pytesseract as tess
from PIL import Image, ImageEnhance, ImageFilter
from pymongo import MongoClient
from gridfs import GridFS
import sys

import nltk
from nltk.tokenize import sent_tokenize
from nltk.corpus import stopwords
from nltk.probability import FreqDist
from nltk.tokenize import word_tokenize
from heapq import nlargest
import io
import os

# Ensure NLTK data is downloaded
# nltk.download('punkt')
# nltk.download('stopwords')

# Configure Tesseract path
tess.pytesseract.tesseract_cmd = r'F:\Tesseract-OCR\tesseract.exe'

# Establish the connection with the DB
client = MongoClient('mongodb+srv://aneesha13sabar:KBpKXvNWEvLevaF8@cluster0.qhunrvl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
db = client['SummaryCreator']  # Send the images to this database
fs = GridFS(db)

# Ensure a PDF path is provided
if len(sys.argv) < 2:
    print("Usage: python process.py <pdf_path>")
    sys.exit(1)

# Convert PDF to images
pdf_path = sys.argv[1]
poppler_path = r'F:\Release-24.02.0-0\poppler-24.02.0\Library\bin'
images = convert_from_path(pdf_path, 500, poppler_path=poppler_path)

# Store images in MongoDB
for i, image in enumerate(images):
    image_name = f'page_{i + 1}.jpg'
    img_byte_arr = io.BytesIO()
    image.save(img_byte_arr, format='JPEG')
    img_byte_arr = img_byte_arr.getvalue()
    fs.put(img_byte_arr, filename=image_name)
    print(f"Stored {image_name} in MongoDB.")

# Preprocess image to improve OCR accuracy
def preprocess_image(image):
    # Convert to grayscale
    gray_image = image.convert('L')
    # Apply thresholding
    enhanced_image = gray_image.point(lambda x: 0 if x < 128 else 255, '1')
    return enhanced_image

# Function to retrieve images from MongoDB and extract text
def extract_text_from_images():
    text = ""
    for grid_out in fs.find():
        try:
            image_name = grid_out.filename
            img_byte_arr = grid_out.read()
            img = Image.open(io.BytesIO(img_byte_arr))
            processed_img = preprocess_image(img)
            # Run OCR with debugging options
            page_text = tess.image_to_string(processed_img, config='--psm 6')
            print(f"Text from {image_name}:\n{page_text}\n")
            text += page_text + " "
        except Exception as e:
            print(f"Error processing {image_name}: {e}")
    return text

# Extract text from images stored in MongoDB
text = extract_text_from_images()

# Ensure text is not None or empty before summarizing
if not text.strip():
    print("No text extracted from images.")
else:
    # Summarize the extracted text
    def summarize_text(text, num_sentences=10):
        sentences = sent_tokenize(text)
        if len(sentences) <= num_sentences:
            return text  # No need to summarize
        
        stop_words = set(stopwords.words('english'))
        words = word_tokenize(text.lower())
        words = [word for word in words if word.isalnum() and word not in stop_words]
        
        freq_dist = FreqDist(words)
        sentence_scores = {}
        for sentence in sentences:
            for word in word_tokenize(sentence.lower()):
                if word in freq_dist:
                    if sentence not in sentence_scores:
                        sentence_scores[sentence] = freq_dist[word]
                    else:
                        sentence_scores[sentence] += freq_dist[word]
        
        summary_sentences = nlargest(num_sentences, sentence_scores, key=sentence_scores.get)
        return ' '.join(summary_sentences)

    # Generate summary of the extracted text
    summary = summarize_text(text)
    print(f"Summary:\n{summary}")
