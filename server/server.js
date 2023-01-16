const express = require('express')

const app = express()

app.get('/', (req,res,next)=>{
    console.log("Server get request")
    res.send("This is the get results")
})

const server = app.listen(3000, function(){
    let port = server.address().port
    console.log("Server listening on port " + port)
})