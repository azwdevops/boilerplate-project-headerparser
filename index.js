// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

/**
 * we define a GET route at '/api/whoami'
 * This route will respond with a JSON object that includes:
 * - ipaddress: The client's IP address
 * - language: The client's preferred language(s) which we can get from the 'Accept-Language' header
 * - software: The client's software details which we get from the 'User-Agent' header
 */
app.get("/api/whoami", (req, res) => {
  return res.json({
    ipaddress: req.ip, // we retrieve the client's IP address
    language: req.get("Accept-Language"), // we retrieve the 'Accept-Language' header
    software: req.get("User-Agent"), // we retrieve the 'User-Agent' header
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
