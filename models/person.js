const mongoose=require('mongoose');
const personschema = new mongoose.Schema({
name:{
    type:String,
    require:true
},
age:{
    type:Number,
},
work:{
    type:String,
    enum:['owner','chef','waiter','manager']
},
email:{
    type:String,
    unique:true
}
});
const person = mongoose.model('person',personschema);
module.exports=person;