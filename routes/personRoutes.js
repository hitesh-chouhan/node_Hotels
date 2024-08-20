const express =require('express');
const router= express.Router();
const person=require('./../models/person');
//post method for person

router.post('/', async (req, res)=>{
    try{
      const data=req.body
      const newperson=new person(data);//data var. ke andar vale data ko newperson ke andar store kar dega person file vale format me;
      const response=await newperson.save();//database me save krne ke liye
      console.log('data saved');
      res.status(200).json(response);//client ko responce dene ke liye
    }
    catch(err){
  console.log(err);
  res.status(500).json({error:'internal server error'});
    }
    })

    //get method for person;

    router.get('/',async(req,res)=>{
        try{
             const data= await person.find();
             console.log('data fetched');
             res.status(200).json(data);
        }catch(err){
              console.log(err);
              res.status(500).json({error:'Insternal server error'});
        }
       })
    //2nd get methos for person
    //parameterized api
router.get('/:worktype' , async (req,res)=>{
    try{
      const worktype=req.params.worktype;
    if(worktype=='chef' || worktype=='manager' || worktype=='waiter' ||
       worktype=='owner')
       {
          const response = await person.find({work:worktype});
          console.log('resonse send');
          res.status(200).json(response);
       }else{
        res.status(404).json({error:'invalid entry'});
       }
      }catch(err){
          console.log(err);
          res.status(500).json({error:'internal server error'});
      }
  })

// mathod for update or put methos
router.put('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;//extract the id from url parameters;
    const updatedPersondata=req.body;
    const response = await person.findByIdAndUpdate(personId,updatedPersondata,{
      new :true,
      runValidators:true,//returns the update documents;
    })
    if(!response){
      res.status(404).json({error:'Person not found'});
    }
    console.log('data updated');
    res.status(200).json(response);
  }
  catch(err){
            console.log(err);
            res.status(500).json({error:'internal server error'});
  }
})

//delete method
router.delete('/:id',async (req,res)=>{
  try{
    const personId=req.params.id;
    const response=await person.findByIdAndDelete(personId);
    if(!response){
      res.status(404).json({error:"person not found"})
    }
    console.log('Data deleted');
    res.status(200).json({message:'Person Deleted Successfully'});

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})

  //exporting the routers;
 module.exports=router;