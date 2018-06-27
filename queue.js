class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
}