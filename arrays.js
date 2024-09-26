/* const array = ["Facundo", "Ezequiel","Peralta"];
console.log(array); 
 */

class MyArray {
    constructor (){
        this.length = 0;
        this.data = {}
        

    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }   
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1]; //delete es la palabra reservada en JS para borrar elementos.
        this.length--;
        return lastItem; //el método pop regresa el elemento que fue eliminado. Lo traemos desde lastItem.
    }
    myDelete(index){
        const item = this.data[index];
        this.shiftIndex(index); //con el método shift index nos aseguramos que todos los elementos se re acomoden en el array.
        return item;
    }
    shiftIndex(index) {
        for(let i = index; i < this.length-1;i++){
            this.data[i] = this.data[i+1];
        } 
        delete this.data[this.length -1]; //aca borramos el item
        this.length--; // borramos el elementos y bajamos el tamaño del array.
    }
}
const arrayMio = new MyArray();
