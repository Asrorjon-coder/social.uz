const Pool = require('db')
const pool = new Pool({
    user: "asrorjon",
    password: "2001",
    host: "localhost",
    database: "test"
})

module.exports=pool