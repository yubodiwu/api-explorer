var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers["x-forwarded-proto"] === "https") {
    res.redirect("http://" + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api", function(req, res) {
    console.log("attempted to get API");
    request(req.query.url, function(error, response, body) {
        res.json(body);
    });
});

app.post("/api", function(req, res) {
    console.log("attempted to post API");
    console.log("body", req.body);
    request({
        url: req.query.url,
        method: "POST",
        body: req.body
    }, function(error, response, body) {
        res.json(body);
    })
})

app.listen(PORT, function () {
  console.log("Express server is up on port " + PORT);
});
