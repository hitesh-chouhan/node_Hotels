const mongoose=require('mongoose');
//url
const mongourl='mongodb://localhost:27017/hotels'
mongoose.connect(mongourl,{
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
