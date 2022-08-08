// metodo recursivo de las torres de hanoi

const  torresHanoi = (discos, torre1, torre2, torre3 ) => {
    
    if( discos == 1 ){
        console.log("Mover de torre " +torre1 +" a torre "+ torre3);
        return;
   
    }else {

            torresHanoi( discos -1, torre1, torre3, torre2 );
            console.log("Mover de torre " +torre1 +" a torre "+ torre3);
            torresHanoi( discos -1, torre2, torre1, torre3 );
    }

}


torresHanoi(3, 1,2,3);