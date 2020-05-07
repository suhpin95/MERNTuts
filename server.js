const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const app = express();
const items = require('./routes/api/items');

app.use(bodyParser.json());


const db = require('./config/keys').mongoURI;

mongoose
.connect( db, { useNewUrlParser: true,  useUnifiedTopology: true} ) 
.then( ()=> console.log("connected to Mongo ATLAS..."))
.catch( err=> console.log(err));

app.use('/api/items',items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`))