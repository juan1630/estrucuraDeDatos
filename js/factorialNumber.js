const numero = Number(prompt('Ingresa un numero'));
console.log(numero) 




const factorialNumber = (numero) => {
    
    if(numero < 0) {
        return 0;
    }else{
        if( numero == 0 ){
            // Caso base
            return 1;   

        }else{
            //Dominio 
            return numero * factorialNumber(numero-1)
            
        }
    }

}

console.log(factorialNumber( numero ));


const factorialNumeroCiclo = (n ) => {
    
    var factor = 1;

    if(n == 0) {
        return 0;
    }else{
        while( n != 0 ){
            factor = n * factor;
            console.log(factor);
            n--;
        }
        return factor;
    }
}


factorialNumeroCiclo(numero)