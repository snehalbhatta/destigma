var express		= require("express");
var app			= express();






//SCHEMA SETUP



app.use(express.static(__dirname + "/public"));

app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	next();
})








//Passport configuration
//All of the passport and express-session set-up 
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));




//Home route 
app.get("/",function(req,res){
	
res.render("campgrounds/home.ejs");
	
})


app.get("/person1",function(req,res){
	
res.render("campgrounds/person1.ejs");
	
})

app.get("/person2",function(req,res){
	
res.render("campgrounds/person2.ejs");
	
})

app.get("/person3",function(req,res){
	
res.render("campgrounds/person3.ejs");
	
})






// app.listen(3000,function(){
	
// 	console.log("The Portfolio Server has started");
// })


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});
