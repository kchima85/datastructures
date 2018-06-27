class HashTable{
    constructor(){
        this.hash = function(str, size){
            let hash = 0;
            for(let i = 0; i < str.length; i++){
                hash += charCodeAt(str[i]);
            }
            return hash % size;
        };

        this.storage = [];
    }

    insert(){

    }

    delete(){

    }

    lookup(){
        
    }
}