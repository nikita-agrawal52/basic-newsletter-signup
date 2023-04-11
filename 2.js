const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/1.html");
});
app.post("/",function(req,res){
    const first=req.body.email;
    console.log(first);
    res.send("hi");

})


app.listen(8000,function(){
    console.log("app started on port 3000");
});