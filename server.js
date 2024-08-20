const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

/*app is variable*/

//bosy-parser
const bodyParser=require('body-parser');
app.use(bodyParser.json());
//.env file access;
const PORT=process.env.PORT || 3000;
 
//importing router;
const personRoutes=require('./routes/personRoutes');//personRoutes
const menuRoutes=require('./routes/menuRoutes');//menuRoutes
//use the routers;
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

//get method
app.get('/', function (req, res) {
  res.send('Associate Software engineer Hitesh Chouhan')
})


app.listen(PORT,()=>{
  console.log("hii i am here");
})