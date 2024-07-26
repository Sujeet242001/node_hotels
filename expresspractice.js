const express= require('express');
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());  //req.body
const Person=require('./models/person');

app.get("/",function(req,res){
    res.send('welcome to our hotel  ... how i can help you ?')
});

//post route to addd person
app.post("/person",(req,res)=>{
    const data=req.body // assuming the request body contrains the person data

    //create new Person document using the moongose model
    const newPerson=new Person(data);
  

    //save the new person to the database
    newPerson.save((error,savePerson)=>{
        if(error){
            console.log("Error saving person",error);
            res.status(500).json({error: "Internal server error"});
        }else{
            console.log("data saved successfully");
            res.status(200).json(savePerson);
        }
    })

})

// app.get("/chicken",function(req,res){
//     res.send("sure sir,iwould love to serve chicken")
// })


// app.get("/idli",function(req,res){
//     res.send("welcome to south india and would like to serve idli")
// })
app.listen(3000,(req,res)=>{
    console.log('listening on port 3000');
});

