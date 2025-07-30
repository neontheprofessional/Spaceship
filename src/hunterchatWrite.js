/*import { fs } from 'node:fs';
export function sayHi(thing) {
    /*
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
                ``
                console.error(`Got an error trying to read the file: ${error.message}`);
            }
        }
        var input = JSON.parse(read('./test.json'))
        var output = JSON.stringify(input)
        write(output, './test.json')
        console.log(input)
        *//*
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
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Credentials': 'true',
        "Access-Control-Allow-Headers": "Content-Type",
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
}
*/