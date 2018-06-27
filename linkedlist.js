class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    getAt(index){
        if(!this.head){ return }
        let counter = 0;
        let node = this.head;

        while(node){
            if(index === counter){
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    getLast(){
        if(!this.head){ return null};
        let node = this.head;

        while(node){
            if(!node.next){
                return node;
            }
            node = node.next;
        }
    }

    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }

        if(index == 0){
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    removeAt(index){
        if(!this.head){ return null; }
        let previous = this.getAt(index-1);
        
        if(!previous || !previous.next){
            return null;
        }

        let temp = previous.next;
        previous.next = previous.next.next;

        return temp;
    }

    print(){
        if(!this.head){ return }
        const results = [];
        let node = this.head;

        while(node){
            results.push(node.data);
            node = node.next;
        }

        return results;
    }
}


var conga = new LinkedList();
conga.insertAt('Kitten', 0);
conga.insertAt('Puppy', 0);
conga.insertAt('Dog', 1);
// conga.insertAt('Cat', 3);
// conga.insertAt('Fish', 2);
// conga.insertAt('Tiger', 10);
console.log(conga.print());
conga.removeAt(3);
console.log(conga.print());