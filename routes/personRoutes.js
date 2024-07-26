const express = require('express');
const router= express.Router();
const Person = require('./../models/person');


// Create a new person
router.post('/', async (req, res) => {
    try {
      const person = new Person(req.body);
      const response = await person.save();
      res.status(201).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  // Get all persons
  router.get('/', async (req, res) => {
    try {
      const persons = await Person.find();
      res.json(persons);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  router.get('/:workType',async(req,res)=>{ 
    try{
        const workType = req.params.workType   // Extract the workType from the url parameter
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:"Invalid work type"});
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

router.put('/:id',async(req,res)=>{
    try{

        const personId=req.params.id; // Extract the id from the RL parameter
        const updatedPersonData=req.body; //updated data for person

        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new : true,  //return the updated document
            runValidators:true, //run  mangoose validation
        })
        if(!response){
            return res.status(404).json({error:"person not found"});
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({Error:'Internal Server Error'});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; // Extract the id from the RL parameter

        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:"person not found"});
        }
        console.log('data deleted');
        res.status(200).json({message:'person deleted successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error:'Internal Server Error'});
    }
})

module.exports=router;
