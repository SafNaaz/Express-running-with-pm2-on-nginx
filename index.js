var express = require("express");
var app = express();
var port = process.env.port || 6700;

var fs = require("fs");

app.get("/products", function (req, res) {
  fs.readFile("products.json", function (err, data) {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log("server is running on port " + port);
});
