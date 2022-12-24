const express = require('express');
const cors = require('cors');
const app = express ();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); 
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7jx70jr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function  run (){
  try{
        const serviceAll = client.db('AllService').collection('services');
        const reviewAll = client.db('AllService').collection('review');

app.get('/services' , async(req , res) =>{

const query ={}
const cursor = serviceAll.find(query);

const services = await cursor.toArray();

res.send(services);
});


app.get('/review' , async(req , res) =>{

const query ={}
const cursor = reviewAll.find(query);

const review = await cursor.toArray();

res.send(review);
});



app.get('/services/home' , async(req , res) =>{

const query ={}
const cursor = serviceAll.find(query);

const services = await cursor.limit(3).toArray();

res.send(services);
});




app.get('/services/:id', async(req, res) =>{
  const id = req.params.id;
 const query = {_id: ObjectId(id)};
 const service = await serviceAll.findOne(query);
 res.send(service);

})

app.post('/review',async( req ,res) =>{


const addNew = req.body;
 
  const result = await reviewAll.insertOne(addNew);
 
 res.send(result);

})

app.post('/services',async( req ,res) =>{


const addService = req.body;
 
  const result = await serviceAll.insertOne(addService);
 
 res.send(result);

})


  }
  finally{



  }

}

run().catch(err => console.error(err));





app.get('/',(req ,res) =>{

res.send('service web server is running')
})
app.listen( port , () =>{

console.log(`web server is running on ${port}`);

})