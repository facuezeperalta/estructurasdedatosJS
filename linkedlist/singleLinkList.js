/* 
let singleLinkList = {
    head: {
        value : 1,
        next : {
            value: 2,
            next:{
                value:3,
                next: {
                    value:4,
                    next: null
                }
            }
        }
    }
} */

class Nodo{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MySingleLinkList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head; /* como es el primer valor apunta de nuevo a la cabeza */
        this.length  = 1; /* obligamos que cuando se haga la instancia de la clase de agregue el primer nodo o sea lleva un elemento si o si  */
    }
    append(value){ //agregar un elemento al final de lista.
        const newNode = new Nodo(value);

        this.tail.next = newNode; //agregamos el nodo a la cola
        this.tail = newNode; //posicionamos el nuevo nodo en la cola.
        this.length++;

        return this
    }
    prepend(value){ //agregar un nodo al comienzo de la linked list.
        const newNode = new Nodo(value);
        newNode.next = this.head; //Hago que el nodo sea la cabeza
        this.head = newNode; // asigno el nodo a la cabeza.
        this.length++; //incremento el valor de la lista en 1.
        return this;
    }
}

let mylinkListed = new MySingleLinkList(1); //instancia de la clase.

