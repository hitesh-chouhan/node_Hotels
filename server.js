const express = require('express')
const app = express();
const db = require('./db')
/*app is variable*/

//bosy-parser
const bodyParser=require('body-parser');
app.use(bodyParser.json());
 
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


app.listen(3000,()=>{
  console.log("hii i am here");
})