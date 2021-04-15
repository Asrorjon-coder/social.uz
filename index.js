const express = require('express')
const port = process.env.port || 1111
const md5 = require('md5')
const app = express()
const db = require('./db')
const usctrl = require('./user_controller')
//parse HTML formm
app.use(express.urlencoded())
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('signup'))
app.use(express.static('login'))
app.use(express.static('views/profile'))
app.set('view engine', 'ejs')

app.get('/signup', function (req,res){
    res.sendFile(__dirname+'/signup/signup.html')
})

app.get('/login', function (req,res){
    res.sendFile(__dirname+'/login/login.html')
})

// registratiom
app.post('/signup', function (req, res) {
    usctrl.createUser(req,res)
})

//login
app.post('/login', function (request, response) {
    email = request.body.user.email
    password = request.body.user.password
        console.log(email)

    const query = {
        // give the query a unique name
        name: 'fetch-user',
        text: 'SELECT * FROM person WHERE email = $1 AND password = $2',
        values: [email, md5(password)],
    }

    db.query(query, function (err, res) {
        if (err) console.log(err)
        console.log(res)
        response.render('profile/profile', {last: res.rows[0].last, first: res.rows[0].first})
        })
})

app.listen(port, () => console.log('server started on post ' + port))