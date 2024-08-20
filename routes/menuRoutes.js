const express= require('express');
const router=express.Router();
const menuitems=require('./../models/menu');

//post methods;
router.post('/',async(req,res)=>{
    try{
      const menudata =req.body
      const newmenu=new menuitems(menudata);
      const menuresponce=await newmenu.save();
      console.log('data saved');
      res.status(200).json(menuresponce);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })
  //get method;
  router.get('/',async (req,res)=>{
    try{
      const data = await menuitems.find();
    console.log('data fetched');
    res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })

  // parameterized api get method
  router.get('/:dishtype',async(req,res)=>{
    try{
         const dishtype=req.params.dishtype;
         if(dishtype=='dal'|| dishtype=='bati'||dishtype=='chaval'||dishtype=='roti'){
            const response=await menuitems.find({dish:dishtype});
            console.log('Resonse send');
            res.status(200).json(response);
         }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
  })

//update by put method
router.put('/:id',async(req,res)=>{
    try{
        const menuid=req.params.id;
        const updatedData=req.body;
        const response= await menuitems.findByIdAndUpdate(menuid,updatedData,{
            new:true,
            runValidators:true,
        })
        if(!response){
            res.status(404).json({error:'invalid entry'});
          }
        console.log('Data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})
//exporting module
module.exports=router;