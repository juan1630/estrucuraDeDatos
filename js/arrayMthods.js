const arr1 = [ 1,2,3,4,5,6,7 ];
const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril' ];

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

//iteramos los elementos del arreglo
for( let i = 0; meses.length > i; i++ ){
    console.log( meses[i] );
}