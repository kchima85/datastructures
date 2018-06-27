class HashTable{
    constructor(){
        this.hash = function(str, size){
            let hash = 0;
            for(let i = 0; i < str.length; i++){
                hash += str.charCodeAt(i);
            }
            return hash % size;
        };

        this.storage = [];
        this.bucketCount = 10;
    }

    insert(key, value){
        let hashedKey = this.hash(key, this.bucketCount);
        const storage = this.storage;

        if(storage[hashedKey] === undefined){
            storage[hashedKey] = [
                [key, value]
            ];
        } else {
            let inserted = false;

            for(let i = 0; i < storage[hashedKey].length; i++){
                if(storage[hashedKey][i][0] == key){
                    storage[hashedKey][i][1] = value;
                    inserted = true;
                }
            }
            if(!inserted){
                storage[hashedKey].push([key, value]);
            }
        }
    }

    delete(key){
        let hashedKey = this.hash(key, this.bucketCount);
        const storage = this.storage;

        if(storage[hashedKey].length == 1 && storage[hashedKey][0][0] == key){
            delete storage[hashedKey];
        } else {
            for(let i = 0; i < storage[hashedKey].length; i++){
                if(storage[hashedKey][i][0] == key){
                    delete storage[hashedKey][i];
                }
            }
        }
    }

    lookup(key){
        let hashedKey = this.hash(key, this.bucketCount);
        const storage = this.storage;

        if(storage[hashedKey].length == 1 && storage[hashedKey][0][0] == key){
            return storage[hashedKey][0][1];
        } else {
            for(let i = 0; i < storage[hashedKey].length; i++){
                if(storage[hashedKey][i][0] == key){
                    return storage[hashedKey][i][1];
                }
            }
            return undefined;
        }
    }
}

let ht = new HashTable();
ht.insert('beau', 'person');
ht.insert('fido', 'dog');
ht.insert('rex', 'dinosour');
ht.insert('tux', 'penguin')
console.log(ht.lookup('tux'))
console.log(ht.storage);