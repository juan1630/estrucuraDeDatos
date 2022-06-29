const cadenas = new Array(10);
const frases = new Array(10);
const fraeses = "";
let respuesta = "";


const equealsArr = (a,b) => JSON.stringify(a) === JSON.stringify(b);
/*
do{
    result = window.prompt('Ingresa algo');
    cadenas.push( result );

    respuesta = window.prompt('Quieres agregar otra frase?');
    respuesta.toUpperCase();
}while( respuesta != 'NO' );
*/

for( var o = 0; o <= cadenas.length; o++ ){
    console.log(  cadenas[o] );
}

//modificando los valores de la cadena
cadenas[1] = "Hola mundo jej";
//TODO: ver el remove en js