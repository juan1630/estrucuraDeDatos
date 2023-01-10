const arregloArgs = [30,2,15,6,20];

const burbuja = ( arreglo = [] ) => {

    console.log( arreglo );

    for ( let i = 0; i < arreglo.length  -1 ; i++  ) {
        for( let j = 0; j < arreglo.length -1; j++ ){
            
           console.log( arreglo[j] , arreglo[j+1] ,arreglo[j] > arreglo[j+1]  )
            // i = 0
            // j = 2
            // arreglo[0] - 3  , arreglo[1] - 2
            if( arreglo[j] > arreglo[j +1] ){
                let aux = arreglo[j+1];
                // aux = 2
                //j = 3  , j+1 = 2, aux 2
                arreglo[j+1] = arreglo[j];
                // asignamos el valor de 2
                // j = 0 , j +1 = 1
                // arreglo[0] - 3 arreglo[1] = undefineded
                arreglo[j] = aux;
                // 2
            }
        }
    }
    return arreglo;

}

console.log(burbuja( arregloArgs ));