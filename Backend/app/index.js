const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db_shopping = require('../db/shopping_db'); //Including user's crud file for quering the database CRUD
const cors = require('cors');

app.use(express.json())
app.use(cors());
app.use(
   bodyParser.urlencoded({
      extended: true,
   })
)

app.get('/', (req, res) =>{
 res.json({info: 'Node.js, Express, and Postgres API'})
})

//====User=quiring=endpoints=Routes=path=binding=to=URL======= 
app.get('/api/users', db_shopping.getUsers)
app.get('/api/users/:id', db_shopping.getUserById)
app.post('/api/users', db_shopping.createUser)
app.put('/api/users/:id', db_shopping.updateUser)
app.delete('/api/users/:id', db_shopping.deleteUser)
//============================================================
//====Products=querying=endpoint=Routes=path=binding=to=URL===
app.post('/api/shopping/products', db_shopping.addProduct)
app.get('/api/products', db_shopping.getAllProducts)

app.get('/api/products/:id', db_shopping.getProductById)
app.put('/api/products/:id', db_shopping.updateProductsDetails)
app.delete('/api/products/:id', db_shopping.deleteProductById)
//============================================================

app.listen(port, () =>{
console.log(`App running on Port: ${port}.`)
})

