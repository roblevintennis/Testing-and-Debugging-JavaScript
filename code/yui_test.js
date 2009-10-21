// Simple test case 1
var nameAgeTest = new YAHOO.tool.TestCase({

    name: "Test Name and Age",
    
    setUp : function () {
        this.data = { name : "Rob", age : 39 };
    },

    tearDown : function () {
        delete this.data;
    },

    testName: function () {
        YAHOO.util.Assert.areEqual("Rob", this.data.name, "Name should be 'Rob'");
    },

    testAge: function () {
        YAHOO.util.Assert.areEqual(39, this.data.age, "Age should be 39");
    }    
});
// Simple test case 2
var fooNumTest = new YAHOO.tool.TestCase({

    name: "Test Foo Num",
    
    setUp : function () {
        this.data = { foo : "FOO", num : 123 };
    },

    tearDown : function () {
        delete this.data;
    },

    testFoo: function () {
        YAHOO.util.Assert.areEqual("FOO", this.data.foo, "foo should be 'FOO'");
    },

    testBar: function () {
        YAHOO.util.Assert.areEqual(123, this.data.num, "num should be 123");
    }    
});

// Create a test suite and add the two test cases from above
yuiSuite = new YAHOO.tool.TestSuite("YUI Test Suite");
yuiSuite.add(nameAgeTest);
yuiSuite.add(fooNumTest);

YAHOO.util.Event.onDOMReady(function (){

    var logger = new YAHOO.tool.TestLogger();	// Create logger
    YAHOO.tool.TestRunner.add(yuiSuite);		// Add Suite to test runner
    YAHOO.tool.TestRunner.run();				// Call run on the runner to run tests
});
