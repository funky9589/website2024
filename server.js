//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/AgencyProject"));

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})

server.get("/profolio", (req,res)=>
    {               
        res.send("Profolio");  
    
    
    })