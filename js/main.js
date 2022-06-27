// el sort - sirve para ordenar el arreglo
//equeals sirve para comparar los obejtos


const arr = new Array(10);
// memoria estatica

for( var i = 0; i <10; i++ ){
    arr[i] = Math.round((Math.random(2) *10), 2);
    console.log( "Datos sin ordnear " ,arr);
}

arr.sort() //ordenamos el arreglo
console.log( "Datos ordenados ", arr)