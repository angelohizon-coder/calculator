const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));

app.listen(3000, function() {
  console.log("server route is in port 3000");
});

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response) {
  var firstNumber = Number(request.body.firstNumber);
  var secondNumber = Number(request.body.secondNumber);

  var result = firstNumber + secondNumber;

  response.send("The sum of the two number is: " + result);
});

app.get("/bmicalculator", function(request, response) {
  response.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(request, response) {
  var weight = Number(request.body.weight);
  var height = Number(request.body.height);

  var result = weight/(Math.pow(height, 2));
  result = result.toFixed(2);
  response.send("Your BMI is " + result);
});
