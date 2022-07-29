const fibonnaci = ( numero ) =>{
    if(numero == 1 ||  numero == 2  ){
        //caso base, respuesta
        return 1;
    }else{

        return fibonnaci( numero- 1) + fibonnaci(numero -2);
    }
}

const fibonacciCiclo = (n) => {

    var aux1 = 1;
    var aux2 = 0;
    var fibo = 0;

    while(n > 0){
            
        fibo = aux1 + aux2;
        aux1 = aux2;
        aux2 = fibo;
        n--;

    }

    return fibo;
}


console.log(fibonnaci(12));

console.log("Fibonacci",fibonacciCiclo(12))