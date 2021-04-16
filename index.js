const express = require('express')
const port = process.env.port || 8080
const app = express()
const approuter = require('./router/approuter')
//parse HTML formm
app.use(express.urlencoded())
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('signup'))
app.use(express.static('login'))
app.use(express.static('views/profile'))
app.set('view engine', 'ejs')
app.use('/', approuter)

app.listen(port, () => console.log('server started on post ' + port))