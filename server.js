// Creating NodeJS Server

// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);

// });


// ********************************************************************************//
// Creating NodeJS Server Using Express
const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);

});