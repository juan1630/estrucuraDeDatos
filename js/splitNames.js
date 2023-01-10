const splitNames = ( name = [] ) => {
    //create the function and initialize the parameter
    
        let nameSplted = '';
        //decalre a varieble will return
    
        name.forEach((element) => {
            // we iterate the array
            nameSplted += element.slice(0,1);
            //split the string and cut the first character
            nameSplted += "."
            //add a .
        });
        //return the value
        return nameSplted;
    }
    
    //create an array with the names
    const name1 = ['Juan', 'Patron'];
    const name2 = ['Juan', 'Patron', 'Guerrero'];
    const name3 = ['Hermman', 'Gummer'];
    const name4 = ['Emma', 'Guerrero', 'Acevedo'];
    const name5 = ['Cesar', 'Ivan', 'Patron', 'Guerreo'];
    

    const moreNames = [  ...name1, ...name2, ...name3, ...name4, ...name5 ];

    console.log( splitNames(name1) ); //output  J.P.
    console.log( splitNames(name2) ); // output J.P.G
    console.log( splitNames(name3) ); // output H.G.
    console.log( splitNames(name4)); //output E.G.A.

    console.log( splitNames( name5 )); // C.I.P.G.
    console.log( splitNames(moreNames) );


const reverseNames = ( name='' ) => {
    const nameArr = [...name];
    let nameReturn = '';
    nameArr.reverse();

    nameArr.forEach( element => {
        nameReturn += element;
    });

    return nameReturn;
}

console.log(reverseNames('JUAN'));// NAUJ
console.log(reverseNames('RAMON')); //NOMAR
console.log(reverseNames('OMAR')); // RAMO