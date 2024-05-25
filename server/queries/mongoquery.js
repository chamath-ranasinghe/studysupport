const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://chamathj11:${process.env.MY_MONGODB_ACCESS_KEY}@cluster0.xbnqaje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const auth = require("../auth/auth");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

const run = async () => {
  await client.connect();
  console.log("Successfully Connected to Mongo Server");
};

exports.checkUser = async (req, res) => {
  const db = client.db("study_support");
  const coll = db.collection("user_details");

  const username = req.body.username;
  const password = req.body.password;

  const query = { username: username };

  try {
    const document = await coll.findOne(query);

    if (document) {
      if (document.password == password) {
        // Create a access token for session authorization
        const token = auth.getToken(username);
        res.cookie("jwt", token, { httpOnly: true });

        res.send({ correct: true });
      } else {
        res.send({ correct: false });
      }
    } else {
      res.send({ correct: false });
    }

    db.close();

  } catch (err) {
    console.error(err);
    db.close();
    res.status(500);
  }
};

exports.insertFlashcards = async(req,res)=>{

  const flashcardContent = req.body;
  const {userid} = flashcardContent;

  const collName = `flashcards_${userid}`;

  const db = client.db("study_support");
  const coll = db.collection(collName);

  try {
    await coll.insertOne(flashcardContent,(err,res)=>{
      if (err) throw err;
      console.log("Document Inserted");
      db.close();
    })

    res.send({success:true});

  } catch (err) {
    console.error(err);
    db.close();
    res.send({success:false});
    res.status(500);
  }

}

exports.getFlashCards = async(req,res)=>{
  const {userid} = req.body;
  const flashcardName = `flashcards_${userid}`;

  const db = client.db("study_support");
  const collection = db.collection(flashcardName);

  try {
    const data = await collection.find().toArray();
    console.log(data);
    const flashcards = {flashcards: data};
    db.close();
    
    res.send(flashcards);
  } catch (error) {
    res.status(500).send(error);
  }
}

run().catch(console.dir);
