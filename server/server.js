const express = require('express')
const mysql = require('mysql')

const app = express()
const connection = mysql.createConnection({
    user: 'root',
    password: '1234',
    database: 'sno'
})

connection.connect((err) => {
    if(err) {
        console.log(`Error connecting to the database: ${err.stack}`)
        return
    }
    console.log(`Connected to the database as id : ${connection.threadId}`)
})

const server = app.listen(0, function(){
    let port = server.address().port
    console.log("Server listening on port " + port)
})