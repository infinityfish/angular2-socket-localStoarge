var express = require('express');
var app = express();


// // socket.io stuff
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(8000, function () {
  console.log('App listening on port 8000!');
});
io.set("origins", "*:*");
 
var currentPrice = 250;
 
io.on('connection', function (socket) {
	socket.emit('priceUpdate',currentPrice);
	socket.on('bid', function (data) {
		currentPrice = parseInt(data);
		socket.emit('priceUpdate',currentPrice);
		socket.broadcast.emit('priceUpdate',currentPrice);
	});
    
});


// Routes
app.get('/', function (req, res) {
  res.send('Auction App is Ready');
});

app.get('/users', function (req, res) {
  var user = [
      {"name": "eric", "age": 45},
      {"name": "afanwi", "age": 14},
      {"name": "abong", "age": 11}
  ];
  res.status(200).json(user);
});