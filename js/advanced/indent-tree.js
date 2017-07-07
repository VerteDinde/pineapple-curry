// create a node tree that assigns the correct children to their parents
// , using only the indent value per node.

const str = `page 1
  page 1.1
page 2
  page 2.1
    page 2.1.1
  page 2.2
page 3`;

const getIndent = str => {
  for(let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') return [i/2 + 1, str.slice(i)];
  }
}

class Node {
  constructor([indent = null, val = null]) {
    this.val = val;
    this.children = [];
    this.isRoot = false;
    this.parent = null;
    this.indent = indent;
  }
}

const parseString = str => {
  const indentLevels = str.split('\n').map(getIndent);
  const root = new Node([0]);
  console.log(indentLevels);
  root.isRoot = true;
  let current = root;

  for (let i = 0; i <indentLevels.length; i++) {
    let newNode = new Node(indentLevels[i]);
    let nextIndent = indentLevels[i + 1] ? indentLevels[i + 1][0] : 0;
    current.children.push(newNode);
    newNode.parent = current;

    if (newNode.indent < nextIndent) {
      current = newNode;
    } else if (newNode.indent > nextIndent) {
      current = newNode.parent;
      while(current.parent && current.indent >= nextIndent) {
        current = current.parent;
      }
    }
  }
  return root;
}

console.log(parseString(str));