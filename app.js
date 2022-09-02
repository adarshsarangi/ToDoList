//jshint esverion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items =[];
const workItems =[];



app.get("/", function(req, res) {

  let day = date.getDay();

  res.render("list", {
    listTitle: day,
    newListItem: items
  });
})

app.post("/",function(req,res){
  let item = req.body.newtask;
  if(req.body.list === "Work"){ //"Work because list title can have only one string without space so listitle = "Work""
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }


});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List", newListItem : workItems});
});

app.get("/about",function(req,res){
  res.render("about",{});
});

app.listen(3000, function() {
  console.log("Server is running on port 3000 .");
});
