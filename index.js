var express = require("express");
var socket = require("socket.io");


var app = express();

var server = app.listen(4000, function(){
    console.log("Listenin");
});
app.use(express.static("public"));

//Socket setup
var io = socket(server);

io.on("connection", function(socket){
    console.log("made connection", socket.id);

    socket.on("chat", function(data){
        io.sockets.emit("chat", data);
    });
});

