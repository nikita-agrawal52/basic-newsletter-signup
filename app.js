const express=require("express");
const request =require("request");
const https=require("https");
const app=express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});
app.post("/",function(req,res){
    const first=req.body.f;
    const l=req.body.l;
    const e=req.body.email;
    const data={
        members:[
            {
                email_address:e,
                status:"subscribed",
                merge_fields:{
                    FNAME:first,
                    LNAME:l,
                }
            }
        ]
    }
    const jsonData=JSON.stringify(data);
    const url="https://us8.api.mailchimp.com/3.0/lists/9c3e5bbb3a";
    const options={
        method:"POST",
        auth:"nikita:218b272ca2ebc4dfecf90aff46016c97-us8"
    }
    const request=https.request(url,options,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname+"/success.html");
        } else{
            res.sendFile(__dirname+"/failure.html");
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
       
    });
    request.write(jsonData);
    request.end();
    

});
app.post("/failure",function(req,res){
    res.redirect("/");
});


app.listen(process.env.PORT||4000,function(){
    console.log("app started on port 4000");
});







// api key mailchimp
// 218b272ca2ebc4dfecf90aff46016c97-us8

// LIST ID
// 8c3e5bbb3a

// api endpoint
// https://us8.api.mailchimp.com/3.0/