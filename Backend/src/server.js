
import express from 'express'
import productlist from './temp-data.js';
import { cartItems as cartItemsRaw } from './temp-data.js';

const productsRaw = productlist;

let cartItems = cartItemsRaw;
let products = productsRaw;

const app = express();
app.use(express.json());

function helper(ids) {
    return ids.map(id=>products.find(product=>product.id===id));
}

app.get('/hello',(req,res)=>{
    res.send("Hello World");
});

app.get('/products',(req,res)=>{
    res.json(products);
});

app.get('/cart',(req,res)=>{
    const nothing = helper(cartItems);
    res.json(nothing);
});

app.get('/products/:productId',(req,res) => {
    const productId=req.params.productId;
    const product = products.find(product => product.id===productId);
    res.json(product);
});


app.post('/cart',(req,res)=> {
    const productid = req.body.id;
    cartItems.push(productid);
    const nothing = helper(cartItems);
    res.json(nothing);
});

app.delete('/cart/:productId', (req, res) => {
    const productId = req.params.productId;
    cartItems = cartItems.filter(id=>id!==productId);
    const nothing = helper(cartItems)
    res.json(nothing);
  });


app.listen(8000,()=>{
    console.log("Server is listening on port 8000!")
});




// import express from 'express'
// import { productlist as productsRaw } from './temp-data.js';
// import { cartItems as cartItemsRaw } from './temp-data.js';

// import { MongoClient } from 'mongodb';



// let cartItems = cartItemsRaw;
// let products = productsRaw;

// const url=`mongodb+srv://anantha28:anantha28102003@cluster0.tmgkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const client = new MongoClient(url);

// const app = express();
// app.use(express.json());

// function helper(ids) {
//     return ids.map(id=>products.find(product=>product.id===id));
// }

// app.get('/hello', async (req,res)=>{
//     await client.connect();
//     const db = client.db("Wine-Shop");
//     const products = await db.collection('products').find({}).toArray();
//     res.send(products);
//     // res.send("Hello World");
// });

// app.get('/products',(req,res)=>{
//     res.json(products);
// });

// app.get('/cart',(req,res)=>{
//     const nothing = helper(cartItems);
//     res.json(nothing);
// });

// app.get('/products/:productId',(req,res) => {
//     const productId=req.params.productId;
//     const product = products.find(product => product.id===productId);
//     res.json(product);
// });


// app.post('/cart',(req,res)=> {
//     const productid = req.body.id;
//     cartItems.push(productid);
//     const nothing = helper(cartItems);
//     res.json(nothing);
// });

// app.delete('/cart/:productId', (req, res) => {
//     const productId = req.params.productId;
//     cartItems = cartItems.filter(id=>id!==productId);
//     const nothing = helper(cartItems)
//     res.json(nothing);
//   });


// app.listen(8000,()=>{
//     console.log("Server is listening on port 8000!")
// });
