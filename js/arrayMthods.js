const arr1 = [ 1,2,3,4,5,6,7 ];
const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril' ];
const meses3 = ['Mayo', 'Junio', 'Julio'];
const meses4 = ['Agosto', 'Septiembre', 'Octubre'];
 
const arr2 = [{
    name:'Juan',
    _id:123,
    email:'juan@gmail.com'
},
{
    name:"Fernando",
    _id: 456,
    email:'fer@gmail.com'
},{
    name:"Carlos",
    _id: 789,
    email:'carlos@gmail.com'
}];

meses[4] = 'Junio';
meses.push( 'Julio' )

//agregar un elemento al incio del arreglo
meses.unshift('Un mes nuevo');
// las funciones que modifican o mutan el arreglo, se les conoce como imperativas, en este paso el PUSH, UNSHIFT, etc.

// funcion declarativa, devuelve un nuevo valor 
const meses2 = [ ...meses, 'Agosto' ];
    //copia, valor a agregar
console.log( meses2 );

//elimina elemento al final del areglo
meses2.pop();

// elimina elemento al inicio del arreglo
meses2.shift();
//iteramos los elementos del arreglo

//eleiminamos elementos del arreglo, el primer parametro que recive es el index del elemento que queremos eliminar, el segundo es el numero de elementos a eliminar.
meses2.splice( 1,1 );
//Es de forma imperativa


const arreglo =  [10,20,30,40,50];

const [ primero, segundo, tercero ] = arreglo;
const [ primero1,, tercero1 ] = arreglo;

// extraemos solo el tercer numero, sin tener que declarar las demas variables 
console.log( tercero1, 'tercero1' )
console.log( primero1, 'primero 1' );

const [ primero2, ...tercero2 ] = arreglo;
//guarda en la varibale tercero2 todos los elementos que no se han desestructurado
console.log( tercero2 );

for( let i = 0; meses2.length > i; i++ ){
    console.log( meses2[i] );
}


const carrito = [
    { nombre: 'Pantalla 1', percio: 2000 },
    { nombre: 'Pantalla 2', percio: 3000 },
    { nombre: 'Pantalla 3', percio: 4000 },
    { nombre: 'Pantalla 4', percio: 5000 },
]


//?forEach
//carrito.forEach( function(elemento) {
//    console.log(elemento);
//});

//?map
const carrito2  =carrito.map( (elemento) => {
    return  'El produco:'+ elemento.nombre + ' cuesta ' + elemento.percio; 
})
console.log( carrito2 );

//? Array metohd some
//para revisar si una elemento existe, se puede usar el includes 

const exists = meses.includes('Enero');
//el includes nos devuelve un boolean si lo encuenta nos retorna un true, sino un false

console.log( exists );

//para revisar si es elemento existe un arreglo de objectos, el incldes no nos sirve tenemos que usar el some


const existe = carrito.some( producto =>  producto.nombre === 'Pantalla 2')

console.log({ existe });


// el .some nos devuelve un true si el elemento existe y false sino existe 


const existe2= meses.some( mes => mes === 'Enero'  );

console.log( existe2 );

//regresa el index del elemento
const indexAbril = meses.findIndex( mes => mes === 'Abril');
console.log( indexAbril );
// Si no encuntra el elemento, devuelve un -1
// arreglo de objecto
const indexCarrito = carrito.findIndex( producto => producto.percio == 3000 );
console.log( indexCarrito );

// si hay 2 objectos con el mimso valor, devuelve el primero valor que encuentra

let resultado;
 resultado = carrito.reduce( (total, producto) =>  total + producto.percio, 0 );
console.log({ resultado });

resultado = carrito.filter( producto => producto.percio >= 3000 );
console.log( {resultado });


resultado = carrito.filter( producto => producto.nombre !== 'Pantalla 3' );
console.log({ resultado });

resultado = carrito.find( producto =>  producto.nombre === 'Pantalla 1');
console.log(resultado);

//Verifica que todos los elementos cumplan una condicion
resultado =carrito.every( producto => producto.percio > 500); 
console.log({resultado});

// Verifica que almenos uno de los elementos cumpla con la condicion
resultado = carrito.some(  producto => producto.percio > 10000);
console.log({resultado});

let mesesConcat;

//concatenamos los arreglos de los meses con ese arreglo
 mesesConcat = meses.concat( meses3, meses4 , 'Otro mes');
console.log(mesesConcat);
// podemos concatener varios elemertos 

//Se pueden unir con el spread operator

mesesConcat = [ ...meses, ...meses3, ...meses4, 'Un mes mas' ];
console.log( mesesConcat, 'Spread' );

mesesConcat = [ 'Otro mes mas ', ...meses ];
console.log(mesesConcat)

const nuevoProducto = { nombre: 'Celular', precio : 21000 };

const carrito3 = [ ...carrito, nuevoProducto ];
console.log( carrito3 );