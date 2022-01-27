const express = require('express'); //iporting express module
const bodyParser = require('body-parser'); //importing the body-parser
const app = express(); //Assigning express module to app
const port = 3000; //Declaring a port variable and asign a port value to it
const db_shopping = require('../db/shopping_db'); //Including user's crud file for quering the database CRUD
const cors = require('cors'); //Importing cors api from cors module

app.use(express.json()); // Defining the data structure that the app should use or recognize
app.use(cors());         // Enabling the app to use the cors for routing for frontend communication
app.use(
   bodyParser.urlencoded({
      extended: true,
   })
);

app.get('/', (req, res) =>{
 res.json({info: 'Node.js, Express, and Postgres API'});
})

//====User=quiring=endpoints=Routes=path=binding=to=URL======= 
app.get('/api/users', db_shopping.getUsers);
app.get('/api/users/:id', db_shopping.getUserById);
app.post('/api/users', db_shopping.createUser);
app.put('/api/users/:id', db_shopping.updateUser);
app.delete('/api/users/:id', db_shopping.deleteUser);
//============================================================
//====Products=querying=endpoint=Routes=path=binding=to=URL===
app.post('/api/products', db_shopping.addProduct);
app.get('/api/products', db_shopping.getAllProducts);

app.get('/api/products/:id', db_shopping.getProductById);
app.put('/api/products/:id', db_shopping.updateProductsDetails);
app.delete('/api/products/:id', db_shopping.deleteProductById);
//============================================================

//========Notifying app to listen to the specified port
app.listen(port, () =>{
console.log(`App running on Port: ${port}.`)
});

