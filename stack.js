class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.count = 0;
    }

    push(data){
        this.head = new Node(data, this.head);
        this.count++;
    }

    pop(){
        if(!this.head){ return }

        let head = this.head;
        this.head = head.next;
        this.count--;

        return head.data;
    }

    peek(){
        return this.head.data;
    }

    isEmpty(){
        return this.count > 0 ? false : true;
    }

    size(){
        return this.count;
    }

    print(){
        if(!this.head){ return null }
        const results = [];
        let node = this.head;

        while(node){
            results.push(node.data);
            node = node.next;
        }
        return results;
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());