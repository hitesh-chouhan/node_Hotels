const mongoose=require('mongoose');
const menuitems = new mongoose.Schema({
    dish:{
        type : String,
        require:true,
        enum:['dal','bati','chaval','roti']
    },
    price:{
        type:String,
        default:false
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredient:{
    type:[String],
    default:[]
    }
})
const menu_data= mongoose.model('menu_data',menuitems);
module.exports = menu_data;


 