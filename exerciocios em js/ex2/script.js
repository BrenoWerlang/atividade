function somar(num1, num2) {
    resultado = num1 + num2
    let prom = new Promise((resolve, reject) => {
      if (resultado % 2 == 0) {
        resolve(resultado)
      }
      else {
        reject(new Error(resultado))
      }
    })
    return prom
  }
  
  somar(3, 4)
    .then((resultado) => {
      console.log("Resultado é par " + resultado)
    })
    .catch((erro)=>{
        console.log("Resultado é impar "+resultado)
    })