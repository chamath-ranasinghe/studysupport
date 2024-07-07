from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import tempfile
import subprocess
import os

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):
    try:
        # Create a temporary file to save the uploaded PDF
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_pdf:
            contents = await file.read()
            tmp_pdf.write(contents)
            tmp_pdf_path = tmp_pdf.name

        # Call the process.py script with the path to the temporary PDF file
        result = subprocess.run(["python", "process.py", tmp_pdf_path], capture_output=True, text=True)

        # Check if the script was executed successfully
        if result.returncode == 0:
            return JSONResponse(content={"message": "PDF processed successfully", "output": result.stdout})
        else:
            return JSONResponse(content={"error": result.stderr}, status_code=500)
        
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
    finally:
        # Clean up the temporary file if it exists
        if os.path.exists(tmp_pdf_path):
            os.remove(tmp_pdf_path)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
