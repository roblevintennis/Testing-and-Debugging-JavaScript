describe 'ObjectCreation'
    before_each
	function MyObj(){};
	MyObj.prototype.foo = 'foo property';
	MyObj.prototype.bar = function() { return "me is bar method"; }
	obj1 = new MyObj();
	obj2 = new MyObj();
    end

    describe 'Prototypes and Object Creation'
	it 'should add prototype property which should be available to all instances'
	    obj1.foo.should.eql 'foo property'
	    obj2.foo.should.eql 'foo property'
	    obj1.bar().should.eql 'me is bar method' 
	    obj2.bar().should.eql 'me is bar method' 
	end	
    end
    describe 'Overriding Prototype Properties'
	it 'should update a prototype property but only affect that same instance'
	    obj1.foo = "new version of foo"
	    obj1.foo.should.eql "new version of foo"
	    obj2.foo.should.eql "foo property"
	end	
    end
    describe 'Updated Prototype Props are really shadowed'
	it 'should return to showing original prototype value after deleting the shadow'
	    obj1.foo = "new version of foo"
	    obj1.foo.should.eql "new version of foo"
	    delete obj1.foo;
	    obj1.foo.should.eql "foo property" 
	    // Test on methods too
	    obj1.bar = function() { return "me is NEW bar method!"; }
	    obj1.bar().should.eql 'me is NEW bar method!' 
	    delete obj1.bar;
	    obj1.bar().should.eql 'me is bar method' 
	end	
    end

    describe 'Prototype Literals'
	it 'should have constructor field if it needs it to be available to instances'
	    t = new FancyProto();
	    t.foo().should.eql 'I am foo'
	    (t instanceof FancyProto).should.eql true
	    (t.constructor == FancyProto).should.eql true
	    // When we overwrite prototype but don't supply a constructor it w/be Object
	    s = new SloppyProto();
	    (s.constructor == SloppyProto).should.eql false
	    (s.constructor == Object).should.eql true
	end
	it 'should be that instances created before overwriting prototype point old default prototype so new prototype properties WILL NOT be available'
	    function Thing(){}
	    var beforeProto = new Thing();
	    Thing.prototype = {
		foo : 'foo'
	    };
	    ('foo' in beforeProto).should.eql false 
	    var afterProto = new Thing();
	    ('foo' in afterProto).should.eql true 
	end
    end
    
    describe 'Prototype Issue - Static-Like Behavior ONLY for Reference Types'
	it 'should share state on prototype non-method properties'
	    var instance1 = new Issues()
	    var instance2 = new Issues()
	    
	    // Reference types are essentially static
	    instance1.arr.push('cuatro')
	    (instance1.arr === instance2.arr).should.eql true

	    instance1.hsh['phone'] = 'Blackberry'
	    (instance1.hsh === instance2.hsh).should.eql true
	    i2Phone = instance2.hsh['phone'].should.eql 'Blackberry'

	    // OMG, primitives hide their state just fine!
	    instance1.x = 9
	    instance1.x.should.eql 9 
	    instance2.x.should.eql 1 
	end
    end
end
