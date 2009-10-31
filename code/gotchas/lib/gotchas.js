// Some JavaScript gothas
function Gotchas(){}
Gotchas.prototype.callParseInt = function(num,radix) {
    return parseInt(num,radix);
};

var SomeObject = {
    foo: 'foo',
    bar: 'bar'
};

var privileged_singleton = function() {
    var privateVar = 'this is private';
    function privateFunc() {
	return 'top secret';
    }
    var obj = SomeObject;
    obj.publicVar = 'this is public';
    obj.publicFunc = function() {
	var message = 'publicFunc is privileged, and hereby allows you to see private var: ' + 
	    privateVar + ', as well as see the return value of privateFunc: ' + privateFunc(); 
	return message;
    };
    return obj;
}();
