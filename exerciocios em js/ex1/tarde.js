function somar(num1,num2)
{
    resultado=num1+num2;
    let prom = new Promise((resolve,reject) =>{

    
    if(resultado%2==0){
        resolve(resultado)
        
        
        
        
    }

    else{
        reject(new Error(resultado))
    }
})
return prom
}



somar(2,2)
.then((resultado)=>{
    console.log("resultado é par "+resultado)
})  
.catch((error)=>{

    console.log("é impar "+resultado)
})