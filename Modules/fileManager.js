const { Console } = require("console");
var fs= require("fs"); //Import du module pour l'écriture du fichier
var fileManager=
{
   writeLevel: function(path, level, extension, contenu)
   {
          //construction via le pattern demandé == yymmddLevel.extension
          let year = new Date().toLocaleDateString('en-GB', {"year":"2-digit"});
          let day= new Date().toLocaleDateString('en-GB', {"day":"2-digit"});
          let month= new Date().toLocaleDateString('en-GB', {"month":"2-digit"})
          let maintenant = `${year}${month}${day}`;
         

          let finalPath= `${path}\\${maintenant}${level}.${extension}`;

           //flag a : permet d'ajouter du contenu à un fichier et le créé si il n'existe pas
        fs.open(finalPath,'a',function(error, fileDescription)
        {
              //Vérifier si il y a une erreur
              if(error)
              {
                 console.log(error);
                 return -1; //empêche de continuer l'exécution de la fonction
              }

              //Tout va bien
              //aJout d'un retour à la ligne en fin  de fichier
              contenu = `${contenu}\r\n`;
              fs.write(fileDescription,contenu, (errWrite, bytes)=>
              {
                  if(errWrite)
                  {
                    console.log(errWrite);                     
                  }
                  else
                  {
                    console.log(`Nombre de bytes : ${bytes}`);
                  }
              });


        });
   }


}

module.exports=fileManager; //!!!!!IMPORTANT!!!!!