

function factorialRecursivo (num) {
    
    if( num == 0  ){
        return 1;
        //el factorial de 0 simpre es 1
        // 0 *24 = 0
    }

    if( num < 0 ){
        return 0;
    }

   return num * factorialRecursivo( num -1 );

}


console.log(factorialRecursivo(4));


var factorial = 1;

function factorialCiclo (num) {
    if( num < 0 ){
        return 0
    }

    while( num > 0 ){
        factorial = num * factorial;        
        num--
    }


    return factorial

}

console.log(factorialCiclo(4))



function fibonacciMethod ( resultFibo ) {    

 
    if( resultFibo == 1  || resultFibo == 2 ){
        return 1;
    }else {             //  resultadoFibo - 11  + resultadoFibo 10
        return   fibonacciMethod( resultFibo -1 )  + fibonacciMethod( resultFibo -2 );

    }
}


console.log( fibonacciMethod( 12));