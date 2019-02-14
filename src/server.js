const express = require('express')
const fetch = require("isomorphic-unfetch")
const server = express()

const client_id = '1653bf150593b10a0d63'
const client_secret = '351a7556b1ed8855d8fb522be963dd663bb3fe41'

server.get("/api/auth_code", (req, res) => {
    const { code } = req.query
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(code)
    fetch(`https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`, {
        method: 'POST',
        headers: {
            accept: 'application/json'
        }
    }).then(res => res.json())
    // .then(json => res.send(json['access_token']))
    .then(json => res.send(json))
    .catch(err => res.send(err))
    // res.send("ok")
})


server.listen(3001, function() {
    console.log("Listening on port 3001...")
})