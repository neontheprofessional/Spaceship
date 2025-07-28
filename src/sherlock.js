import { readFileSync, createWriteStream } from 'node:fs';
function read(x) {
    try {
        const data = readFileSync(x);
        return data.toString();
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

function write(x, y) {
    try {
        createWriteStream(y).write(x)
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}
var input = JSON.parse(read('./test.json'))
var output = JSON.stringify(input)
write(output, './test.json')
console.log(input)