const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config/key')
const { User } = require('./models/user');

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static("public"))

mongoose.connect(config.mongoURI,
 {useNewUrlParser:true, useUnifiedTopology:true}).then(() => console.log("database connected"))
                                                    .catch(err => console.log(err));

app.route("/")
.get(function(req,res){
  res.send('hello world')
})
.post(function(req,res){
  res.redirect("/")
})


app.post('/api/users/register', function(req, res){
  const user = new User(req.body)
  user.save(function(err, userData){
    if(err){
      return res.json({ success: false, err})
    }
    else{
      return res.status(200).json({
        success : true
      })
    }
  })
})

app.listen(3000, function(req, res){
  console.log("server is running on 3000")
})
