# JavaScript Basics 
## Varaibles 
    - Una variable declarada como const, no puede cambiar sus valores salvo los objectos y lo arreglos 
# Estructura de datos con JS

### Ordenamiento de datos con la funcion sort de JS

## Array methods
- Los metodos **push** agrega un elemento al arreglo al final del mismo
- Los metodos **unshift** agrega un elemento del arrego al inicio del mismo
- El **push** y el **unshift** se les conoce como funciones que muetan el arreglo
-  Fill method from arrays - Sirve para llenar un array por sus elementos
- El array method some, sirve para encontrar un elemento dentro de una propiedad que esta dentro de un array de objetos.
- Para eliminar el ultimo elemento de un array, se usa el metodo **pop**
- Eliminar elementos sin importar el index,  **splice** recive por parametro el index y el numero de elementos a eliminar
    - meses2.splice( 1,1 );
- **Foreach**, es un metodo que sirve para recorrer los arreglos de forma, mas rapida.

- **map** Es uniterador, solo que este regresa un nuevo arreglo con los que se especifica dentro del callback.

    - Dentro del callback podemos modificar los elementos de acuerdo a como lo necesitemos.

- **findIndex**  Es un metodo que ayuda a encontar el index de un elemento.
- **reduce** Se encarga de unir un grupo de valores.
     - No retorna la suma de los valores
- **filter** crea un nuevo arreglo con la condicion que se está pasando en el callback
    - Es muy util a la hora de elimnar los elementos.
**find** Se encarga de buscar un elemento dentro del arreglo y retornalo completamente.
**every** Es un array method, todos los elementos del arreglo deben de cumplir la condicion del elemento.
**some** Se encarga de comprobar que almenos uno de los elementos cumpla con una condicion.

**Espread operator** crea una copia del objecto

###  FillDestructuring, crea una copia de un array o de un objeto

### Memoria dinamica
    - Arrays de forma dinamica
### Recursividad 
    - Se amnda a llamar asi mismo 
    - Necesita una sentacia de paro
    - El problema se va reduciendo
    - Divide el problema de forma mas sencilla
    - (n-1)

### Ejercicios
    - Torres de hanoi

### Listas enlazadas
    - Son una coleccionde de elementos, que van enlazdos
    - Se contienen dentro de una nodo y cada nodo va conectado con el nodo siguiente (Enlaces o referencias)
    - Trabajan con memoria dinamica
    - Metodos de las listas enlazadas
    - Inicializacion de las listas
    - Insertar elementos
    - Encontrar elementos
    - Comprobar si la lista tiene elementos
    - Listas siemples enlazadas
    - Listas doblemente enlazadas
    - Listas Circular simplemente enlazdas
    - Listas circular doblemente enlazadas