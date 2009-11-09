function Node(id, val) {
		this.id			= id;
		this.data		= val;
};

Node.prototype = {
		constructor: Node
};
function BSTree(n) {
		this.root = n;
};
BSTree.prototype = {
		// Essentially have to go past node it should be connected to  
		// looking for undefined, so we always need pointer to parent node
		addNode: function(node) {
				var current = this.root;
				var parent = null;
				while(true) {
						parent = current;
						if(node.id < current.id) {			// Go left?
								current = current.left;
								if(current === undefined) {
										parent.left = node;
										return;
								}
						} else {												// Go right
								current = current.right;
								if(current === undefined) {
										parent.right = node;
										return;
								}
						}
				} // ends while
		},
		find: function(key) {
				var current = this.root;
				while(current !== undefined) {
						if(key == current.id) {
								return current;
						} else {
								if(key < current.id) {
										current = current.left;
								} else {
										current = current.right;
								}
						}
				}
				return null;	
		},
		// Builds an "in order" array of the list's nodes (eg [1,2,3,4...])
		traverseInOrder: function(inOrdArray, cNode) { 
				if(cNode !== undefined) {
						this.traverseInOrder(inOrdArray, cNode.left);
						inOrdArray.push(cNode);
						this.traverseInOrder(inOrdArray, cNode.right);
				}
				return inOrdArray;
		}
		// , delete: funcion omitted
};
