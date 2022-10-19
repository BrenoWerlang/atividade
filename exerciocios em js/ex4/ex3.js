function esperar (tempo=2000) {

    return new Promise(function (resolve){
  
        setTimeout(() => resolve(), tempo )
  
    })
  
  }

  esperar(2000)
    .then(() => console.log('1'))
    .then(esperar)
    .then(()=> console.log('2'))
    .then(esperar)
    .then(() => console.log ('3'))
    .then(esperar)
  
  async function executar(){
    esperar(1500)
    console.log('4')
    esperar(1500)
    console.log('5')
    esperar(1500)
    console.log('6')

  }
  executar();
  console.log();

  async function executarNovamente(){
    await esperar(2500);
    console.log("metodo 2-1")
    await esperar(2500);
    console.log("metodo 2-2")
    await esperar(2500);
    console.log("metodo 2-3")
  }
  executarNovamente()
  
  
  

