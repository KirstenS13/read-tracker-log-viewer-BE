// imports express
const express = require('express');

// creates server
const server = express();

// shows express how to use json
server.use(express.json());

// defines which port the server will run on for local host
const PORT = 5000;

// runs this when we run the "server" script in package.json - starts the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

