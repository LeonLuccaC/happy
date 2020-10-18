// import dependecies

const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// start a library

const server = express();
server

  // utilize body of req

  .use(express.urlencoded({ extended: true }))

  // utilize static files

  .use(express.static("public"))

  // configuring template engine

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // aplicatons routes

  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage)

  // turn on the server

  .listen(5500);
