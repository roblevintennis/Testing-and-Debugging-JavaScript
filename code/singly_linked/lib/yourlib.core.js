function LinkNode(id) {
    this.id = id;
    this.next = null;
};
LinkNode.prototype = {
    constructor: LinkNode,
    toString: function() { return "LinkNode id: " + this.id; }
};

function SinglyLinkedList() {
    this.head = null;
    this.length = 0;
};
SinglyLinkedList.prototype = {
    constructor: SinglyLinkedList,
    insertBeginning: function(node) {
	node.next = this.head;
	this.head = node;
	this.length++;
    },
    traverse: function() {
	var arrayOfIds = [];
	var current = this.head;
	while(current != null) {
	    arrayOfIds.push(current.id);
	    current = current.next;
	}
	return arrayOfIds;
    },
    remove: function(id) {
	var current  = this.head;
	var previous = this.head;
	while(current != null) {
	    if(current.id === id) {		// If found match
		if(current === this.head) {	// If first link in list
		    this.head = this.head.next;
		} else {			
		    previous.next = current.next;
		}
		this.length--;
		return true;
	    } else {				// Didn't match. Move to next link
		previous = current;
		current  = current.next;
	    }
	}
	return false;
    },
    find: function(id) {
	var current = this.head;
	while(current != null) {
	    if(current.id === id) {
		return current;
	    }
	    current = current.next;
	}
	return null;
    }
};
