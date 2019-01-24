var http = require('http');
const app = require('./backend/app');

const server = http.createServer((req, res) => {
    res.end('This is my first response');
});

process.env.PORT = 5000
server.listen(process.env.PORT || 3000);
