// ----- Singly Linked List ----
// We are not going to rename the spec.core.js and yourlib.core.js in 
// efforts to save time.
describe 'Singly Linked List'
  describe 'Create a node containing simple data member and point to the very next node.'
    it 'should create first node with next pointing to null'
	node = new LinkNode("Some data")
	node.next.should.eql null
    end
  end
end
