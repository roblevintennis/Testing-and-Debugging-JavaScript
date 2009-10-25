function JSObjects(){};
JSObjects.prototype = {
    constructor : JSObjects,
    objLiteralCreate : function() {
	/*
	return {
	    name : 'Rob',
	    age : 39
	}
	*/
	o = new Object();
	o.name = 'Rob';
	o.age  = 39;
	return o;
    }
}
