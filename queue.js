class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class Queue{
    constructor(){
        this.head = null; //remove from the head
        this.tail = null; //add to the tail
        this.count = 0;
    }

    push(data){
        let node = new Node(data);
        if(!this.tail && !this.head){
            this.tail = this.head = node;
            this.count++
            return;
        }

        let tail = this.tail;
        tail.next = node;
        this.tail = node;
        this.count++;
    }

    pop(){
        if(!this.head){
            return null;
        }

        let temp = this.head;
        this.head = this.head.next;

        if(!this.head){
            this.tail = null;
        }
        this.count--;
        return temp;
    }

    peek(){
        if(!this.head){ return null }
        return this.head.data;
    }

    isEmpty(){
        return this.count > 0 ? false : true;
    }

    size(){
        return this.count;
    }

    print(){
        const results = [];
        let node = this.head;

        while(node){
            results.push(node.data);
            node = node.next;
        }

        return results;
    }
}

var q = new Queue(); 
console.log(q.size());
q.push('a');
console.log(q.size());
console.log(q.print());
q.push('b');
console.log(q.size());
console.log(q.print());
q.push('c');
console.log(q.size());
console.log(q.print());
q.pop();
q.pop();
q.pop();
console.log(q.size());
console.log(q.peek());
console.log(q.print());