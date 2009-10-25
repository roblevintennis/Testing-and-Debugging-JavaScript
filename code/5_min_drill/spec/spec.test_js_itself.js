describe 'TestJsItself'
    before_each  
	jsTest = new JSTest   
	arr = jsTest.arrayTest()
    end  
    describe '.switchTest()'
	it 'should return corresponding case primitive int as a string'
	    jsTest.switchTest(1).should.eql "one" 
	end
	it 'should fall through to next case when omitting a break'
	    jsTest.switchTest("no break case").should.eql "next case"
	end
    end
    describe '.arrayTest()'
	it 'should return object for typeof array because JS is weird in that way'
	    (typeof arr == 'object').should.eql true
	end
	it 'should use zero based indexing'
	    arr[1].should.eql 2 
	end
    end
end
