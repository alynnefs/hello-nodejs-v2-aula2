// hello5.js
const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nomes = [];

function nomedoarquivo(){
    rl.question("Digite o nome do arquivo:\n",function(line){
      var arquivo = line;
      console.log(arquivo);
      leianome(arquivo,3);
    });
}

function leianome(arquivo,count){
  if(count--){
    rl.question("Digite um país:\n",function(line){
      nomes.push(line);
      leianome(arquivo,count);
    });
  }else gravaarquivo(arquivo);
}

function gravaarquivo(arquivo){

  for(var i in nomes)
    fs.appendFile(arquivo,nomes[i]+"\n");

  rl.close();
  console.log("Arquivo "+arquivo+" salvo!");
}

// chamar a função
nomedoarquivo();


