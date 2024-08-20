const mongoose=require('mongoose');
//importing dotenv module;
require('dotenv').config();
//*url
//const mongoUrl='mongodb://localhost:27017/hotels'
//*acsessing .env var.;
const mongoUrl=process.env.Mongourl;
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected', () => {
    console.log("it is connected");
});
db.on('diconnected', () => {
    console.log("it is diconnected");
});
db.on('error', (err) => {
    console.log("there is an error");
});
module.exports=db;
