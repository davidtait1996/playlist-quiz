require("dotenv").config();
var http = require('http')



const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

console.log(process.env.REACT_APP_SECRET_KEY)

app.get("/api", (req, res) => {



  res.json({ message: "Hello from server!" });
});

http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World');
    response.end();
  })
  .listen(PORT);