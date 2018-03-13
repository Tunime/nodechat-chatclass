//llama a la express
var express = require('express');
var app = express();
//la variable que requiere el http
var server = require('http').Server(app);
//la variable io tendra todas la funcionalidades de los socket.io
var io = require('socket.io')(server);
var messages = [{
	author: "Carlos",
    text: "Hola! que tal?"
},{
	author: "Pepe",
    text: "Muy bien! y tu??"
},{
	author: "Paco",
    text: "Genial!"
}];
//la primera ruta
app.get('/',function(req, res){
    res.status(200).send("hola mundosda");
});
//que escuche mensajes del servidor
io.on('connection', function(socket) {
	console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);
});

// el servidor corriendo
//node server/main.js
server.listen(8080, function() {
	console.log('Servidor corriendo en http://localhost:8080');
});

