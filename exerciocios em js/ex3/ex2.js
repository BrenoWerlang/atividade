function dobrarCincoSegundos(numero) {
    
    return new Promise(resolve => {
  
      setTimeout(() => {
        resultado1 = numero*2;

        resolve(resultado);
  
      }, 5000);

      
  
    });
  
  }
  dobrarCincoSegundos(2)

  .then((resultado)=>{

    console.log(resultado)
  })

  


