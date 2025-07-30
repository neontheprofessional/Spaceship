#!/usr/bin/node
const EventEmitter = require('events');
const fs = require('node:fs');
const http = require('http');
var data =  require('./StationStatus.json')
const Cvalue = "#5430F0"
const Ckey ="#30F0B0"
function dir(){
    let dir =`Directory`
    for (i in data.Users){
        dir = `${dir}<br><span style='color:${Ckey}'>${data.Users[i]['Name']}</span>:<span style='color:${Cvalue}'>${data.Users[i]['Outbound']}</span>`
    }
    return(dir)
}
function overview(query){
    let user = query[1]
    let overview = data.Users[user]['Name']
    for (let i in data.Users[user]){
        overview = `${overview}<br><span style='color:${Ckey}'>${i}</span>:<span style='color:${Cvalue}'>${data.Users[user][i]}</span>`
    }
    return (overview)
}
function ask(query){
    return(data.Users[query[2]][query[3]])

}
function update(query)
{
    let temp = query[4].split("%20")
    let update = temp.join(" ")
    data.Users[query[2]][query[3]]=update
    try{fs.writeFileSync('./StationStatus.json',JSON.stringify(data));}
    catch(err){return(`Station failed to update due to ${err}`)}
}
function action(query){
 //let request = prompt.get(['Action'], function(err,result){
    if (query.length == 2 && !Object.keys(data.Users).includes(query[1])) {return dir()}
    if (query.length == 2 && Object.keys(data.Users).includes(query[1])){return overview(query)}
    if (["ask","Ask","ASK","a"].includes(query[1])){return ask(query)}
    if (["update","Update","UPDATE","u"].includes(query[1])){return update(query)}
 }

 var server = http.createServer((req, res) => {
     const { url, method } = req;
     const query = url.split("/")
     console.log(url)
     let response = action(query)
     res.writeHead(200, {
         'Content-Type': 'text/html',
         'Access-Control-Allow-Origin': '*'
     });

     res.end(response);
 });
 server.listen(7387);

