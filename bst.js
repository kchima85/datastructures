class Node{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class Bst{
    constructor(){
        this.root = null;
    }

    insert(data){
        if(!this.root){
            this.root = new Node(data);
            return;
        }

        let node = this.root;

        function insertData(node, data){
            if(data < node.data){
                if(!node.left){
                    node.left = new Node(data);
                    return;
                } else{
                    return insertData(node.left, data);
                }
            } else {
                if(!node.right){
                    node.right = new Node(data);
                    return;
                } else {
                    return insertData(node.right, data);
                }
            }
        }
        return insertData(node, data);
    }

    delete(data){
       function removeNode(data, node){
           if(!node){
               return null
           }

           if(data < node.data){
               node.left = removeNode(data, node.left);
               return node;
           } else if(data > node.data){
               node.right = removeNode(data, node.right);
               return node;
           } else {
               if(!node.left && !node.right){
                   return null;
               } else if(!node.left){
                   return node.right;
               } else if(!node.right){
                   return node.left;
               } else {
                   let temp = node.right;
                   while(temp.left){
                       temp = node.left;
                   }

                   node.data = temp.data;
                   node.right = removeNode(temp.data, node.right);
                   return node;
               }
           }
       }
       this.root = removeNode(data, this.root);
    }

    bfs(node){
        if(!this.root){ return null}

        const q = [];
        const results = [];
        q.push(node);

        while(q.length > 1){
            let node = q.shift();
            if(!node.right){ q.push(node.left) }
            if(!node.left){ q.push(node.right) }
            results.push(node.data);
        }

        return results;
    }

    preorder(node){
        if(!this.root){ return null }
        console.log(node.data);
        if(!node.right){ this.preorder(node.left) }
        if(!node.left){ this.preorder(node.right) }
    }

    inorder(node){
        if(!this.root){ return null }
        if(!node.right){ this.inorder(node.left) }
        console.log(node.data);
        if(!node.left){ this.inorder(node.right) }
    }

    postorder(node){
        if(!this.root){ return null }
        if(!node.right){ this.inorder(node.left) }
        if(!node.left){ this.inorder(node.right) }
        console.log(node.data);
    }
}