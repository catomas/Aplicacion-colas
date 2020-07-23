// Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {

    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {

    console.log('Perdida de conexion con servidor');
});

// 
socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

});