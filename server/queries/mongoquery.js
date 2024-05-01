const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://chamathj11:${process.env.MY_MONGODB_ACCESS_KEY}@cluster0.xbnqaje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri
//     , {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
//}
);

exports.checkUser = (req, res)=>{
    run();
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db("sample_mflix");
    const coll = db.collection("movies");
    
    const cursor = coll.find()

    await cursor.forEach(console.log);

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);