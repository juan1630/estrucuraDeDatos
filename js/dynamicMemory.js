const cadenas = new Array(10);
const frases = new Array(10);
const fraeses = "";
const respuesta = "";


const equealsArr = (a,b) => JSON.stringify(a) === JSON.stringify(b);

do{
    result = window.prompt('Ingresa algo');
    cadenas.push( result );
    
    respuesta = window.prompt('Quieres agregar otra frase?');
    respuesta.toLocaleUpperCase();
}while( respuesta === 'SI' );
