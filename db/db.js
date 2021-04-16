const Pool = require('pg').Pool
const pool = new Pool({
    user: "asrorjon",
    password: "2001",
    host: "localhost",
    database: "test"
})

module.exports=pool

// create table person(
//         id serial primary key,
//         first varchar(32),
//         last varchar(32),
//         email varchar(128),
//         password varchar(32),
//         gender varchar(6),
//         username varchar(32));