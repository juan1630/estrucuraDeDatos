//bajar una escalera
var escalones = 50;

const bajaEscalera = (escalon) => {
    console.log('Escalera con', escalon);
    // caso base - sabemos que es el ulitmo y que termina
   
   if(escalon < 0){
    if( escalon === 0 ){
        console.log('Se termino la escalera');
        return
    }else{
        setTimeout(() => {
            escalon = escalon - 1;
            console.log(escalon);
            escalones = escalon;
            bajaEscalera( escalones );
        }, 1000);
    }
   }
}

// factorial de un numero, con recursividad

bajaEscalera( escalones );