// initialize express

let express = require('express');
let app = express();

// serve static pages

app.use('/', express.static('public'));

//initialize  http server

let http = require('http');
let server = http.createServer(app);

//initialize socket server

let io = require('socket.io');
io = new io.Server(server);

// let users object data****
let users = {};

//listen for a client to connect and disconnect
io.on("connection", (socket) => {
    console.log("We have a new client: " + socket.id);

    

    //listen for messages from the client
    //listen for an event named 'message' from client
    socket.on('message', (data) => {
        console.log("Received 'message' with the following data:");
        console.log(data);

        // Add socket id to user data*****
        data.id = socket.id;

         // Store user data*****
        users[socket.id] = data;

        //send data to ALL clients, including this one
        io.emit('message-share', data);

    });

    //listen for this client to disconnect
    socket.on("disconnect", () => {
        console.log("A client has disconnected: " + socket.id);

        // Remove user from users object****
        delete users[socket.id];
    });
});

// set server port

server.listen(3000, () => {
    console.log('app is listening at localhost: 3000');
})

