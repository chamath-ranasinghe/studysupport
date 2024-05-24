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
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

run().catch(console.dir);
