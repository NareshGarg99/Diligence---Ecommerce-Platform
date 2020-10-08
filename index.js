const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')

const app = express()
mongoose.connect("mongodb+srv://NareshT-admin:WvrT3QjwsNLXGS7@cluster0.vppak.mongodb.net/diligenceDB",
 {useNewUrlParser:true, useUnifiedTopology:true}).then(() => console.log("database connected"))
                                                    .catch(err => console.log(err));

app.route("/")
.get(function(req,res){
  res.send('hello world')
})
.post(function(req,res){
  res.redirect("/")
})


app.listen(3000, function(req, res){
  console.log("server is running on 3000")
})
