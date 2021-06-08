//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")
const app = express();
const items=["Buy Food","Eat Food","Cook Food"];
const workItems =[];
app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.get("/", function(req,res){
  const day=date.getDay();
res.render("list",{ListTitle:day,newListItem:items});
});

app.get("/work",function(req,res){
  res.render("list",{ListTitle:"Work List",newListItem:workItems})
})

app.post("/",function(req,res){
  let item=req.body.newItem;
  if (req.body.list==="Work") {
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }


});
app.post("/work",function(req,res){
  const item =req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
});

app.get("/index",function(req,res){
  res.render("index");
})


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
