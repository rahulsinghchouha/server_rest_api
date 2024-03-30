const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000; //

app.get('/',(req,res)=>{
    res.send("Hi , I am live"); //if any request on that so we send that response
})

//listen the server with the help of function 

const start = async () =>{
    try{
        app.listen(PORT,()=>{//for check connect to backend            
            console.log(`${PORT} yes i am connected`);
        })
    }
    catch(error){
        console.log(error)
    }
}

start();