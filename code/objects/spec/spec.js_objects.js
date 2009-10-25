describe 'JSObjects'
    before_each
	jso = new JSObjects();
    end
    describe '.objLiteralCreate()'
	it 'should create an object literal'
	    (typeof jso.objLiteralCreate() == 'object').should.eql true
	end
    end
    describe 'Accessing Object Properties'
	it 'should be able to use either dot or subscript notation to access properties'
	    o = {name:'Rob', age:39}
	    o.name.should.eql 'Rob'
	    o['name'].should.eql 'Rob'
	end
    end
    describe 'Object Assignment'
	it 'should reference original object and reflect any changes made to original'
	    o = jso.objLiteralCreate();
	    var copy = o;
	    copy.name.should.eql 'Rob' 	    
	    o.name = 'Charlie'
	    copy.name.should.eql 'Charlie' 
	end
    end
end
