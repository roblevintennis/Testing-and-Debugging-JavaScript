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
    },
    isEmpty: function() { 
	return (this.head === null) ? true : false;
    },

    // Let's forget that we have a length already ;-)
    findNthToLast: function (n) {
	// Guard code
	if(!isANumber(n) || this.isEmpty() ) { return null; }

	// Set current to head - loop list to get size
	var current = this.head;
	var size = 1;		    
	while(current.next !== null) {
	    size++;
	    current = current.next;
	}
	if(size < n) return null;   // List needs to be bigger then n

	var index = size - n;	    // Compute the index

	current = this.head;	    // reset current to beginning

	for(i=0; i<index; i++)	    // Traverse to index and return
	    current = current.next
	return current;
    }
};
function isANumber(n) {
    if(typeof n === 'number' && isFinite(n)) {
	return true;
    } else {
	return false; 
    }
};    
