//import a local module 
//const calcul = require("./localModule");
//import core module => installé avec node ex: http,fs
//const fs = require ("fs"); 
//console.log(fs);
//step1
//console.log("starting..");
//step2
//let data =fs.readFileSync("./file.txt");
//console.log(data.toString());
/*fs.readFile("./file.txt", "utf-8", (err, data) => {
    err ? console.log(err) : console.log(data);
});*/
//step3
//console.log("finiching..");


const http = require("http");

http.createServer((request, response) => {
    response.end("hello farahfarahfarahh")
}).listen(4444);