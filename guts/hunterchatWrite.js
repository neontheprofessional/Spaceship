const fs = require('node:fs');
const http = require('http');
function read(x) {
    try {
        const data = fs.readFileSync(x);
        return data.toString();
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}
function write(x, y) {
    try {
        fs.createWriteStream(y).write(x)
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

function Signal() {
    var message = read('./Outbound.txt')
    var server = http.createServer((req, res) => {
        // Set the response HTTP header with HTTP status and Content type
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*'
        });

        // Send the response body as 'Hello, World!'
        res.end(message);
    });
    server.listen(7387);
    console.log('server opened');
    setTimeout(() => {
        server.close();
        // Closes idle connections, such as keep-alive connections. Server will close
        // once remaining active connections are terminated
        server.closeIdleConnections();
    }, 9500);
}
setInterval(Signal, 10001)

