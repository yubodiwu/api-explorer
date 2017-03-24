var express = require('express');
var request = require('request');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.get("/api", function(req, res) {
    console.log("attempted to get API");
    request(req.query.url, function(error, response, body) {
        console.log(req.query.url);
        console.log(body);
        console.log(typeof body);
        res.json(body);
    });
});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
