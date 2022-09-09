//1- Je demande l'utilisation d'un module ==> http
var http = require("http");
//2- Import d'un module local
var monLog = require("./Modules/log.js");
//3- Import module filemanage
var fm = require("./Modules/fileManager.js");
//4- import du module url
var url = require("url"); 
//5- importer module querystring
const {parse} =require("querystring") 

var server = http.createServer(function(request,response) //request : la demande http, response: ce que renvoit le server
{
    let nom='';
    let power=0;
    let form='';
    //En GET
    if(request.method=="GET")
    {
        //Transforme l'url en objet url de node pour aller chercher les infos
        let monUrl = url.parse(request.url,true);
      
        //je vais vérifier si j'ai un query
 
        let query = monUrl.query;
        console.log(query);

        if(query.nom)
        {
            nom= query.nom;
            power=query.puissance;       
          }
          response.writeHead(200,{"Content-Type":"text/html"});
          let body=`<html>
                      <body>
                         <h1>Bienvenue ${nom}(${power})</h1>
                         <h2>GET</h2>
                         <form method="GET">
                             <label>Choisir le nom du personnage</label><br>
                             <input type="text" name="nom"><br>
                             <label>Choisir sa puissance</label><br>
                             <input type="number" name="puissance">
                             <input type="submit">
                         </form>
                         <hr>
                         <h2>POST</h2>
                         <form method="POST">
                             <label>Choisir le nom du personnage</label><br>
                             <input type="text" name="nom"><br>
                             <label>Choisir sa puissance</label><br>
                             <input type="number" name="puissance">
                             <input type="submit">
                         </form>
                      </body>
                    </html>`;
         response.end(body);
         
    }
    if(request.method=="POST")
    {
        request.on("data", f=> 
        {
            console.log(f.toString()); 
            form+=f.toString();
        });
        request.on("end", ()=>
        {
           console.log(`Dans le end : ${form} `);
           let temp = parse(form);
           nom = temp.nom;
           power= temp.puissance;
           console.log(temp);
           response.writeHead(204,{"Content-Type":"text/html"});
           let body=`<html>
                 <body>
                    <h1>Bienvenue ${nom}(${power})</h1>
                    <h2>GET</h2>
                    <form method="GET">
                        <label>Choisir le nom du personnage</label><br>
                        <input type="text" name="nom"><br>
                        <label>Choisir sa puissance</label><br>
                        <input type="number" name="puissance">
                        <input type="submit">
                    </form>
                    <hr>
                    <h2>POST</h2>
                    <form method="POST">
                        <label>Choisir le nom du personnage</label><br>
                        <input type="text" name="nom"><br>
                        <label>Choisir sa puissance</label><br>
                        <input type="number" name="puissance">
                        <input type="submit">
                    </form>
                 </body>
               </html>`;
                response.end(body);
        })
        
    }
    
    
});
server.listen(5010, function()  
{
  //écrire dans info que le serveur est lancé
  console.log("Le serveur est dispo sur http://localhost:5010");
  fm.writeLevel("./logs","Info","log","Le serveur est dispo sur http://localhost:5010"); 
});

