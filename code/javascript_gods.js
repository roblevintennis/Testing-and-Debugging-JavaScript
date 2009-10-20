// Create our test driven javascript namespace so as to not interfere  with the global namespace
var TDJS = (function() {
    console.log("this in TDJS: %o", this);// => this in TDJS: Window simpletest.html

    var privateVar = "A private variable";
    var privateJSHeroes = {
	jqueryGuy: "John Resig",
	yahooUIGuy: "Nicholas C. Zakas",
	yahooOG: "Douglas Crockford",
	jsCreator: "Brendan Eich",
	firebugCreator: "Joe Hewitt"
    };

    // Here's a factory that creates Person's
    function Person(name) {
	console.log("this in Person constructor: %o", this);// => this in Person constructor: Object
	this.name = name;
    }
    Person.prototype.getName = function() { return this.name; }
    Person.prototype.setName = function(name) { this.name = name; }
    Person.prototype.greet   = function() { 
	alert("Hi, my name is " + this.name); 
	alert("Let us pay tribute to: \n" +
		    "Inventor of JavaScript: " + privateJSHeroes.jsCreator + "\n" +
		    "Inventor of FireBug: " + privateJSHeroes.firebugCreator + "\n" +
		    "Inventor of JQuery: " + privateJSHeroes.jqueryGuy + "\n" +
		    "Yahoo Home Page & author of Professional JavaScript for Web Developers: " + 
			privateJSHeroes.yahooUIGuy + "\n" +
		    "JavaScript: The Good Parts: " + privateJSHeroes.yahooOG + "\n" +
		    "(and my apologies to all the other JavaScript greats not listed!)\n"); 
    }
    return {
	Person : Person
    };

})();

var me = new TDJS.Person("Rob");
me.greet() //=> alerts Hi, my name is Rob
// alert(TDJS.privateJSHeroes.jqueryGuy);// => Nope! It's private: TDJS.privateJSHeroes is undefined
