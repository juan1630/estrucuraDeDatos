// el sort - sirve para ordenar el arreglo
//equeals sirve para comparar los obejtos


const arr = new Array(10);
// memoria estatica

//sirve para darle un length aunque no sepas cual es su length del otro array


const arrString = Array(5)
arrString.fill('Bienvenido a la Party', 0,4);

for( var i = 0; i <10; i++ ){
    arr[i] = Math.round((Math.random(2) *10), 2);
    console.log( "Datos sin ordnear " ,arr);
}

let numerotes = new Array( arr.length );
numerotes = [...arr];
console.log( numerotes, "Array copy si ordernar" );

console.log(numerotes.sort(), "numerotes ordenados");

for( var j = 0; j <= arrString.length; j++ ){
    console.log( arrString[j])
}

arr.sort() //ordenamos el arreglo
console.log( "Datos ordenados ", arr)