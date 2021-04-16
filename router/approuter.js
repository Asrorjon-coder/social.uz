const express = require('express')
let approuter = express.Router()
const md5 = require('md5')
const db = require('../db')
const path = require('path')
const root = path.join(__dirname,'../')

approuter
    .route('/login')
    .get((request,response) => {
        response.sendFile(root + '/login/login.html')
    })
    .post((request,response) => {
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

approuter
    .route('/signup')
    .get((request,response) => {
        response.sendFile(root + '/signup/signup.html')
    })
    .post((request,response) => {
        first = request.body.user.first
        last = request.body.user.last
        username = request.body.user.username
        email = request.body.user.email
        gender = request.body.user.gender
        password = md5(request.body.user.password)
        console.log(first, last, username, email, gender, password)

        db.query('INSERT INTO person (first, last, email, password, gender, username) values ($1, $2, $3, $4, $5, $6) RETURNING *', [first, last, email, password, gender, username])
        response.render('welcome', {last: last, first: first})
    })

module.exports = approuter