const isValid = (numerotarjeta) => {
//valor del input validator:
  
  console.log(numerotarjeta);
  let accumulator = 0;
  if (numerotarjeta.length ==16) {
    //el forEach esta recorriendo todos los elementos que estan dentro de un arreglo
    const arr= Array.from(numerotarjeta);
    console.log(arr);
    arr.forEach((numero, posicion) => {
      //const par guardar true o false
      const par = posicion % 2 == 0;
      //si la posicion es par se multiplica por dos
      if (par) { 
      const multiplicar = numero * 2; 
    
      //si es mayor o igual a 10, debemos sumar los digitos del resultado.

      if (multiplicar >=10) {
        console.log(multiplicar , "M");
        console.log(numero , "N");
        
        const resultado = multiplicar.toString();
        const suma= parseInt(resultado[0]) + parseInt(resultado[1]) ;
        accumulator = accumulator + suma;
        
        }
        else{
          accumulator = accumulator +  multiplicar;
        
        }
      }
         else{
         accumulator = accumulator + parseInt(numero);
         console.log(accumulator);
         }

          
    })
   
     if(accumulator % 10 ==0) { 
      return true;
    }
    else{
      return false;
    }
  
  }



}
  const maskify = (numerotarjeta) => {
    const transform = Array.from(numerotarjeta);
    let result = ""
    transform.forEach((elemento, posicion) => {
      if(posicion >= transform.length -4) {
        result = result + elemento; 
      }
      else {
         result = result + "#";

      }

    })

    return result ;
  
  }
  


  

  
  
  

      
            
  



//7963291498360481 valida
//1234567890098760 invalida
  



export {isValid, maskify};
