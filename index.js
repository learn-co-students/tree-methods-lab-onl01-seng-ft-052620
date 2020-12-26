function inOrder(currentNode){
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
        inOrder(currentNode.right)
    }


}

function findOrAdd(rootNode,newNode){
    let currentNode=rootNode
    if(newNode.data < rootNode.data){
        currentNode= rootNode.left
        if(currentNode){
            if(currentNode.data != newNode.data){findOrAdd(currentNode,newNode)}
            else{return true}

        }
        else{
            rootNode.left = newNode
        }
    }
    else if (newNode.data > rootNode.data){
        currentNode = rootNode.right
        if(currentNode){
            if(currentNode.data != newNode.data){findOrAdd(currentNode,newNode)}
            else{return true}

        }
        else{
            rootNode.right = newNode

        }
    }
    return true

}
// what is wrong with my code that needs to return node with max element in BST
function max(rootNode){
    let currentNode= rootNode
    return currentNode.right != null ? max(currentNode.right) : currentNode

}

function min(rootNode){
    let currentNode= rootNode
    return currentNode.left != null ? max(currentNode.left) : currentNode
}
