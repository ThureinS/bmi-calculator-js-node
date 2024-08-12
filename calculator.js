const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height) / 100;
  let result = weight / (height * height);

  res.send("Your BMI is " + result);
});

app.listen("3000", function () {
  console.log("Server Started");
});
