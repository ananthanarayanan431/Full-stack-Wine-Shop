
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