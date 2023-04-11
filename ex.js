// const express=require("express");
// const https=require("https");
// const app=express();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.get("/", function(req,res){
//     res.sendFile(__dirname+"/calculator.html");
// });
// app.post("/",function(req,res){
//     var num1=req.body.num1;
//     var num2 =req.body.num2;
//     console.log(num1+num2);
//     res.send("data received")
// })
const express = require('express');
 
const app = express();
 
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/calculator.html");
});
 
app.post("/", (req, res) => {
  const username = Number(req.body.num1);
  const password =Number(req.body.num2);
  console.log("Username: " + username);
  console.log("Password: " + password);
  console.log(username+ password);
  res.send("Data received");
});
 
app.listen(3000);

// app.get("/",function(req,res){

//     const url="https://api.openweathermap.org/data/2.5/weather?id=524901&appid=70a4b091674d535251c5cba10c273c20&q=Raebareli,India&units=metric";
//     https.get(url,function(response){
//         console.log(response.statusCode);
//         response.on("data",function(data){
//             const weatherData=JSON.parse(data);
//             console.log(weatherData);
//             const temp=weatherData.main.temp;
//             console.log(temp);
//             const weatherDescription=weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon;
//             console.log(icon);
//             const imageUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
//             res.write("the current weather in raebareli is "+weatherDescription+".");
//             res.write("the temperature in the raebareli is "+temp+" degree celsius.");
//             res.write("<img src="+imageUrl+">");
//             res.send();
//         })
//     })
    

// })


// app.listen(3000,function(){
//     console.log("server running at port 3000");
// })