const fs = require('fs');

// Read the JSON file using require
const jsonData = require('./syslog.json');

// Update the data
jsonData.Bits = 2;

// Synchronously write the updated data back to the JSON file
fs.writeFileSync('./syslog.json', JSON.stringify(jsonData, null, 2));

console.log('Data updated successfully.');