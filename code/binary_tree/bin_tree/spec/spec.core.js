/*
------------------------- Binary Search Tree ------------------------- 

NOTE: This is about the simplest Binary Search Tree we could make. It does NOT implement deletion 
      which is rather complex. However, Zakas has a series of articles online (part II does the deletiation part):
      http://www.nczonline.net/blog/2009/06/16/computer-science-in-javascript-binary-search-tree-part-2/
			http://www.nczonline.net/blog/2009/06/09/computer-science-in-javascript-binary-search-tree-part-1/

   Also referenced was the Data Structures and Algorithms book by Robert Lafore (I used the C++ version but the Java one is the latest).

	 -------------------------
	 Robert Lafore Definitions - pg 303 Data Structures Algos book (C++ Sams version!)
	 -------------------------

-- Root: The node at the top of the tree is called the root. There is only one root in a tree.

-- Parent: Any node (except the root) has exactly one edge running upward to another node. The node above it is called the parent of the node.

-- Child: Any node can have one or more lines running downward to other nodes. These
nodes below a given node are called its children.

-- Leaf: A node that has no children is called a leaf node or simply a leaf. There can be
only one root in a tree, but there can be many leaves.

-- Subtree: Any node can be considered to be the root of a subtree, which consists of its
children, and its children’s children, and so on. If you think in terms of families,
a node’s subtree contains all its descendants.

-- Visiting: A node is visited when program control arrives at the node, usually for the purpose
of carrying out some operation on the node, such as checking the value of
one of its data members, or displaying it. Merely passing over a node on the path from
one node to another is not considered to be visiting the node.

-- Traversing: To traverse a tree means to visit all the nodes in some specified order. For example,
you might visit all the nodes in order of ascending key value. There are other
ways to traverse a tree, as we’ll see in the next hour.

-- Levels: The level of a particular node refers to how many generations the node is from
the root. If we assume the root is Level 0, its children will be Level 1, its grandchildren
will be Level 2, and so on.

-- Keys: We’ve seen that one data item in an object is usually designated a key value. This
value is used to search for the item or perform other operations on it. 

-- Binary Trees: If every node in a tree can have at most two children, the tree is called a binary
tree.

-- Unbalanced Trees
Have most of their nodes on one side of the root or the other; also individual subtrees may also be unbalanced.

*/

describe 'Binary Search Tree'
    before_each
				// For simple tests
				node1		 = new Node(1,111)
				node2		 = new Node(2,222)
				node3		 = new Node(3,333)
				node4    = new Node(4,444)
				// Create root, root->left and root->right on tree
				root				= new Node(15,15)
				leftChild		= new Node(10,10)
				rightChild	= new Node(16,16)
				tree				= new BSTree(root)
				tree.addNode(leftChild)
				tree.addNode(rightChild)
		end	
		it 'should create a node2 with left and right nodes'
				// Node should be as initialized data, left/right null
				node2.data.should.be 222 
				node2['left'].should.be_null
				node2['right'].should.be_null
				// After assignment, left/right should be as assigned
				node2['left'] = node3
				node2['right'] = node4
				node2['left'].should.equal node3
				node2['right'].should.equal node4
				node2['right'].data.should.equal 444
		end
		it 'should create root node and add nodes to left or right as appropriate for binary search trees'
				var tree = new BSTree(node2)
				tree.root.should.equal node2
				tree.addNode(node3)
				tree.root.right.should.equal node3
				tree.addNode(node1)
				tree.root.left.should.equal node1
		end
		it 'should create nested trees on left and right side of root'
				// To insure nesting, create grandchild and make sure NOT direct child of root
				var llGrandChild	= new Node(5,5)
				var rrGrandChild	= new Node(17,17)
				tree.addNode(llGrandChild)
				tree.addNode(rrGrandChild)
				(root.left !== llGrandChild).should.be_true
				(root.right !== rrGrandChild).should.be_true
		end
		it 'should find children nodes by the id passed in'
				var llGrandChild	= new Node(5,5)
				var rrGrandChild	= new Node(17,17)
				tree.addNode(llGrandChild)
				tree.addNode(rrGrandChild)
				tree.find(5).id.should.equal 5
				tree.find(15).id.should.equal 15
				tree.find(10).id.should.equal 10
				tree.find(16).id.should.equal 16
				tree.find(17).id.should.equal 17
				tree.find(888).should.be_null 
				tree.find('abc').should.be_null 
		end
		it 'should add and find nodes even if negative numbers'
				var negNode = new Node(-10)
				tree.addNode(negNode)
				tree.find(-10).id.should.equal -10
		end
		it 'should traverse in order and return in order array'
				var llGrandChild	= new Node(5,5)
				tree.addNode(llGrandChild)
				var inOrderArray = tree.traverseInOrder([], root)	
				inOrderArray[0].id.should.equal llGrandChild.id
				inOrderArray[1].id.should.equal leftChild.id
				inOrderArray[2].id.should.equal root.id
				inOrderArray[3].id.should.equal rightChild.id
		end
end

