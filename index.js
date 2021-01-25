const inOrder = (currentNode) => {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }
  console.log(currentNode.data);

  if (currentNode.right) {
    inOrder(currentNode.right);
  }
};

const findOrAdd = (rootNode, newNode) => {
  if (rootNode.data == newNode.data) return true;

  if (newNode.data < rootNode.data) {
    if (rootNode.left) {
      return findOrAdd(rootNode.left, newNode);
    } else {
      return (rootNode.left = newNode);
    }
  }

  if (newNode.data > rootNode.data) {
    if (rootNode.right) {
      return findOrAdd(rootNode.right, newNode);
    } else {
      return (rootNode.right = newNode);
    }
  }
};

const max = (currentNode) => {
  if (currentNode.right) {
    return max(currentNode.right);
  } else {
    return currentNode;
  }
};

const min = (currentNode) => {
  if (currentNode.left) {
    return min(currentNode.left);
  } else {
    return currentNode;
  }
};
