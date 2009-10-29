describe 'JavaScript Inheritance Tests'
    before_each
	animal = new Animal("Onyx")
	dog = new Dog("Sebastian", "Lab")
	
	person = { password : 'secret', toString : function(){ return '<Person>' } }
	stub(person, 'toString').and_return('Original toString method!')	
    end
    describe 'Pseudoclassical Inheritance Creation'
	it 'should create parent and child object using pseudoclassical inheritance'
	    animal.constructor.should.eql Animal
	    // dog.constructor.should.eql Dog // Nope: expected Animal to eql Dog
	    dog.constructor.should.eql Animal 
	    animal.should.be_a Animal 
	    dog.should.be_a Animal
	    // dog.should.be_a Dog // Nope! We severed the original prototype pointer and now point to Animal!
	    dog.should.be_an_instance_of Animal
	    dog.should.be_an_instance_of Dog 
	    (animal instanceof Dog).should.be_false
	end
	it 'should behave such that child inherits methods and instance variables defined in parent'
	    animal.whoAmI().should.match /I am Onyx.*/ 
	    dog.whoAmI().should.match /Sebastian.*/
	    animal.should.respond_to 'whoAmI'
	    dog.should.respond_to 'whoAmI'
	    dog.should.have_prop 'name'
	end
	it 'should behave such that methods and instance variables added to child are NOT available to parent'
	    dog.bark().should.match /Ruff Ruff/i
	    dog.should.have_property 'breed'
	    dog.should.respond_to 'bark'
	    // animal.should.have_prop 'breed' // Of course not!
	    // animal.should.respond_to 'bark' // Of course not!
	end
	it 'should behave such that reference variables on the parent are "staticy" to all child instances'
	    dog.arr.should.eql([1,2,3]) 
	    dog.arr.push(4)
	    dog.arr.should.eql([1,2,3,4]) 
	    spike = new Dog("Spike", "Pitbull")
	    spike.arr.should.eql([1,2,3,4]) 
	    spike.arr.push(5)
	    rover = new Dog("Rover", "German Sheppard")
	    spike.arr.should.eql([1,2,3,4,5])
	    rover.arr.should.eql([1,2,3,4,5])
	    dog.arr.should.eql([1,2,3,4,5])
	end	
    end

    describe 'Combination Inheritance Solves Static Prototype Properties Issue'
	it 'should maintain separate state for each child object'
	    child_1 = new Child("David", 21)
	    child_2 = new Child("Peter", 32)
	    child_1.arr.push(999)
	    child_2.arr.push(333)
	    child_1.arr.should.eql([1,2,3,999])
	    child_2.arr.should.eql([1,2,3,333])
	    child_1.getAge().should.eql 21
	    child_1.should.be_a Parent
	end
    end

    describe 'Prototypal Inheritance'
	it 'should inherit properties from parent'
	    person.toString().should.match /Original toString.*/i
	    person.password.should.eql 'secret'
	    //joe = Object.inherit(person)
	    joe = helper.inherit(person)
	    joe.password.should.eql 'secret'
	    joe.password = 'letmein'
	    joe.password.should.eql 'letmein'
	    person.password.should.eql 'secret'
	end
    end

    describe 'Parisitic Combination Inheritance'
	it 'should use inheritPrototype (to call parent constructor once) and still work as expected'
	    sub = new SubType("Nicholas Zakas", 29)
	    sub.toString().should.match /.*Nicholas Zakas/
	    sub.getAge().should.eql 29
	    charlie = new SubType("Charlie Brown", 69)
	    charlie.arr.should.eql([1,2,3])
	    charlie.arr.push(999)
	    charlie.arr.should.eql([1,2,3,999])
	    sub.arr.should.eql([1,2,3])	
	    sub.should.be_an_instance_of SubType
	    charlie.should.be_an_instance_of SubType
	    (sub instanceof SubType).should.eql true 
	    (sub instanceof Parent).should.eql true 
	end
    end
    
    describe 'Functional Durable Inheritance'
	it 'should hide private variables'
	    sup = new super_func( {name: "Superfly Douglas", age: 39, foo: "foo", bar: "bar"} )
	    sup.getName().should.eql 'Superfly Douglas'
	    sup.name.should.be_undefined
	    sup.getAge().should.eql 39 
	    sup.age.should.be_undefined
	    sup.getFoo().should.eql 'foo'
	    sup.foo.should.be_undefined
	end
	
	it 'should create a descendent object that inherits properties while maintaining privacy'
	    sub = new sub_func( {name: "Submarine", age: 1, foo: "food", bar: "barfly"} )
	    sub.getName().should.eql 'Submarine'
	    sub.name.should.be_undefined
	    sub.getAge().should.eql 1 
	    sub.age.should.be_undefined
	    sub.getFoo().should.eql 'food'
	    sub.foo.should.be_undefined 
	    sub.getBar().should.eql 'barfly'
	    sub.bar.should.be_undefined 
	    sub.coolAugment().should.match /.*fresh new perspective.*/
	    //sub.should.be_an_instance_of super_func NOPE!
	    //sub.should.be_an_instance_of sub_func   NOPE!
	    sub.should.be_an_instance_of Object 
	end
    end

end
