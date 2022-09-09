//1- Je demande l'utilisation d'un module ==> http
var http = require("http");
//2- Import d'un module local
var monLog = require("./Modules/log.js");
//3- Import module filemanage
var fm = require("./Modules/fileManager.js");

var server = http.createServer(function(request,response) //request : la demande http, response: ce que renvoit le server
{
    monLog.info("appel du serveur");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("Hello world Again"); 
    monLog.error("C'est la Fin AAAAAAh");
});
server.listen(5000, function()  
{
  //écrire dans info que le serveur est lancé
  console.log("Le serveur est dispo sur http://localhost:5000");
  fm.writeLevel("./logs","Info","log","Le serveur est dispo sur http://localhost:5000"); 
});

