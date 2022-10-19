let idade = prompt("de sua idade");
let nome = prompt("de seu nome");

function esperar (tempo=2000) {

    return new Promise(function (resolve){
  
        setTimeout(() => resolve(), tempo )
  
    })
  
  }

async function executarNovamente(){
    await esperar(2500);
    if(idade<18){
        alert(nome);
        alert(idade);
        alert("voce tem menos de 18");
    }
    else{
        alert(nome);
        alert(idade);
        alert("voce tem mais de 18")
    }
}
executarNovamente();