
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  //res.sendFile(__dirname + '/index.html');
  // res.

  // res.send({
  //   a:45
  // })
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3332, function(){
  console.log('listening on *:3332');
});
