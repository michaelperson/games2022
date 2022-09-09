var fm = require("./fileManager.js");
var log = 
{
   info: function(info)
   {
       console.log('Info :'+ info);
       //+ écriture dans un fichier
       fm.writeLevel("./logs","Info","log",info);
   },
   warning: function(warning)
   {
       console.log(`Warning : ${warning}`);
       //+écriture dans une fichier
       fm.writeLevel("./logs","Warning","log",warning);
   },
   error: function(error)
   {
       console.log(`Error : ${error}`);
       
       fm.writeLevel("./logs","Error","log",error);
   }
}

module.exports=log;