//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();



app.use(bodyParser.urlencoded({extended:true}));

//Connecting CSS
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
 })

 app.get("/notifications",function(req,res){
    res.sendFile(__dirname + "/notifications.html");
})

 app.get("/upcomingLessons",function(req,res){
    res.sendFile(__dirname + "/upcomingLessons.html");
})

app.get("/tasks",function(req,res){
    res.sendFile(__dirname + "/tasks.html");
})

app.get("/leaderboard",function(req,res){
    res.sendFile(__dirname + "/leaderboard.html");
})

app.get("/courses",function(req,res){
    res.sendFile(__dirname + "/courses.html");
})

app.get("/graphs",function(req,res){
    res.sendFile(__dirname + "/graphs.html");
})

app.get("/timetable",function(req,res){
    res.sendFile(__dirname + "/timetable.html");
})

app.get("/hwprogress",function(req,res){
    res.sendFile(__dirname + "/hwprogress.html");
})



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
    console.log("Server has started successfully");
  });