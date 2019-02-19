const express = require("express");
const fetch = require("isomorphic-unfetch");
const config = require("./config.json");

const server = express();

const { client_id, client_secret } = config;
server.get("/api/auth_code", (req, res) => {
  const { code } = req.query;
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  fetch(
    `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
    {
      method: "POST",
      headers: {
        accept: "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(err => res.send(err).code(500));
  //res.send("ok");
});

server.listen(3001);
