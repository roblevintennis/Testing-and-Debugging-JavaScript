// ----- Singly Linked List ----
// We are not going to rename the spec.core.js and yourlib.core.js in 
// efforts to save time.
describe 'Singly Linked List'
    before_each
	list	    = new SinglyLinkedList()
	firstNode   = new LinkNode(1)
	secondNode  = new LinkNode(2)
    end
    after_each
	list	    = null
	firstNode   = null
	secondNode  = null
    end
    describe 'Create a node containing simple id member and point to the next node.'
	it 'should create first node with next pointing to null'
	    node = new LinkNode(1)
	    node.toString().should.eql "LinkNode id: 1"
	    node.next.should.be_null 
	    node.id.should.eql 1
	end
	it 'should create linked list with zero elements & a head member pointing to null.'
	    list.length.should.eql 0
	    list.head.should.be_null
	end
    end
    
    describe 'List insertion'
	it 'should insert node as new head of list, and have its next point to old head.'
	    list.insertBeginning(firstNode)
	    list.head.id.should.eql firstNode.id
	    list.insertBeginning(secondNode)
	    list.head.id.should.eql secondNode.id
	    list.head.next.id.should.eql firstNode.id
	    list.length.should.eql 2
	end
    end

    describe 'List traversal'
	it 'should traverse list from front to back and return array of node ids'
	    list.insertBeginning(firstNode)
	    list.insertBeginning(secondNode)
	    arr = list.traverse()
	    arr.should.eql([2,1])
	end
    end

    
    describe 'Link node removal'
	it 'should return false when list is empty and we try to remove'
	    removed = list.remove(2)
	    removed.should.eql false
	end
	it 'should return true when list has one matching link, then length should be 0'
	    list.insertBeginning(firstNode)
	    list.remove(1).should.eql true
	    list.length.should.eql 0
	end
	it 'should remove a link node by id'
	    list.insertBeginning(firstNode)
	    list.insertBeginning(secondNode)
	    list.insertBeginning(new LinkNode(3))
	    list.remove(2).should.eql true
	    list.length.should.eql 2	    
	    list.remove(999).should.eql false 
	    /* Insure we in fact removed link */
	    list.traverse().should.eql([3,1])
	end
	it 'should return false if non-integer passed in'
	    list.insertBeginning(firstNode)
	    list.remove('abc').should.eql false
	end
    end

    describe 'Find an element given its id member.'
	it 'should find and return a node by id if match in list otherwise returns null'
	    list.insertBeginning(firstNode)
	    list.insertBeginning(secondNode)
	    node = list.find(firstNode.id)
	    node.should.equal firstNode
	    list.find(999).should.be null
	    list.find('junk').should.be null
	end
	it 'should return null if list is empty' 
	    list.find(firstNode.id).should.be null
	    list.find(secondNode.id).should.be null
	    list.find("garbage").should.be null
	end
    end
    
end
