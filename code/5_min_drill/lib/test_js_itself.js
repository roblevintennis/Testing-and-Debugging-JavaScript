JSTest = function() {}
JSTest.prototype = {
    constructor: JSTest,
    switchTest : function(c) {
	switch(c) {
	    case 0: 
		return "zero";
		break;
	    case 1:
		return "one";
		break; 
	    case "no break case":
		// do nothing...testing fall through
	    case "next case":
		return "next case";
		break;
	}
    },
    arrayTest : function() {
	return [1,2,3,4,5];
    }
}

