const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

var EmployeesRouter = require('./routes/router');
app.use('router', EmployeesRouter);

// parse requests of content-type: application/x-www-form-urlencoded

// simple route
app.get("/", (req, res) => {
  res.send('App is listening');
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

module.exports = app;