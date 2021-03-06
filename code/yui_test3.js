/**
 * This code is basically cloned from the example Yahoo code at:
 * http://developer.yahoo.com/yui/3/examples/test/test-simple-example_clean.html
 * The author of Testing & Debugging JavaScript makes no claim to ownership or rights
 * to this code. In other words, Yahoo, please don't sue me!!!
 */
YUI({combine: true, timeout: 10000}).use("node", "console", "test",function (Y) {

    Y.namespace("tddjs.test");
    
    Y.tddjs.test.DataTestCase = new Y.Test.Case({
    
        name : "YUI 3 Tests",
        
        //---------------------------------------------------------------------
        // setUp and tearDown methods - optional
        //---------------------------------------------------------------------
        
        /*
         * Sets up data that is needed by each test.
         */
        setUp : function () {
            this.data = {
                name: "test",
                year: 2007,
                beta: true
            };
        },
        
        /*
         * Cleans up everything that was created by setUp().
         */
        tearDown : function () {
            delete this.data;
        },
        
        //---------------------------------------------------------------------
        // Test methods - names must begin with "test"
        //---------------------------------------------------------------------
        
        testName : function () {
            var Assert = Y.Assert;
            
            Assert.isObject(this.data);
            Assert.isString(this.data.name);
            Assert.areEqual("test", this.data.name);            
        },
        
        testYear : function () {
            var Assert = Y.Assert;
            
            Assert.isObject(this.data);
            Assert.isNumber(this.data.year);
            Assert.areEqual(2007, this.data.year);            
        },
        
        testBeta : function () {
            var Assert = Y.Assert;
            
            Assert.isObject(this.data);
            Assert.isBoolean(this.data.beta);
            Assert.isTrue(this.data.beta);
        }
    
    });
    
    Y.tddjs.test.ArrayTestCase = new Y.Test.Case({
    
        //name of the test case - if not provided, one is auto-generated
        name : "Array Tests",
        
        //---------------------------------------------------------------------
        // setUp and tearDown methods - optional
        //---------------------------------------------------------------------
        
        /*
         * Sets up data that is needed by each test.
         */
        setUp : function () {
            this.data = [0,1,2,3,4]
        },
        
        /*
         * Cleans up everything that was created by setUp().
         */
        tearDown : function () {
            delete this.data;
        },
        
        //---------------------------------------------------------------------
        // Test methods - names must begin with "test"
        //---------------------------------------------------------------------
        
        testPop : function () {
            var Assert = Y.Assert;
            
            var value = this.data.pop();
            
            Assert.areEqual(4, this.data.length);
            Assert.areEqual(4, value);            
        },        
        
        testPush : function () {
            var Assert = Y.Assert;
            
            this.data.push(5);
            
            Assert.areEqual(6, this.data.length);
            Assert.areEqual(5, this.data[5]);            
        },
        
        testSplice : function () {
            var Assert = Y.Assert;
            
            this.data.splice(2, 1, 6, 7);
            
            Assert.areEqual(6, this.data.length);
            Assert.areEqual(6, this.data[2]);           
            Assert.areEqual(7, this.data[3]);           
        }
    
    });    

    Y.tddjs.test.ExampleSuite = new Y.Test.Suite("Example Suite");
    Y.tddjs.test.ExampleSuite.add(Y.tddjs.test.DataTestCase);
    Y.tddjs.test.ExampleSuite.add(Y.tddjs.test.ArrayTestCase);

    //create the console
    var r = new Y.Console({
        newestOnTop : false,
        style: 'block' // to anchor in the example content
    });
    
    r.render('#testLogger');
    
    Y.Test.Runner.add(Y.tddjs.test.ExampleSuite);

    //run the tests
    Y.Test.Runner.run();

});


