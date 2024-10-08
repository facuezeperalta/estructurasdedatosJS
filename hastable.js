class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
    hashMethod(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
    set(key, value) {
      const address = this.hashMethod(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
    get(key){
        const address =  this.hashMethod(key); // le pasamos el key para que nos regrese el bucked
        const currentBucket = this.data[address]; // le pasamos el indice donde se encuentra el valor.
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1] // regreso el elemento i pero devolvemos el valor que esta en la posición 1.
                }
            }
        }
        return undefined;
    }

  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('Diego', 1990);
  myHashTable.set('Mariana', 1998);
  console.log(myHashTable.set('Alejandra', 2000));