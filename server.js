var express = require('express');
const jsonServer = require("json-server");
// const server = jsonServer.create();
var server = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(express.json())
server.use(middlewares);
server.use(router);

server.listen(80, () => {
  console.log("JSON Server is running");
});
