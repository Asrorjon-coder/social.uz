const express = require('express')
const port = process.env.port || 1111
const md5 = require('md5')
const app = express()

//parse HTML formm
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('signup'))
app.use(express.static('login'))
app.use(express.static('profile'))
app.set('view engine', 'ejs')

app.get('/signup', function (req,res){
    res.sendFile(__dirname+'/signup/signup.html')
})

app.get('/login', function (req,res){
    res.sendFile(__dirname+'/login/login.html')
})

app.listen(port, () => console.log('server started on post ' + port))