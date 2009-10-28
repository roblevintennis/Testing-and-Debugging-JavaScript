describe 'JavaScript Inheritance Tests'
    before_each
	animal = new Animal("Onyx")
	dog = new Dog("Sebastian", "Lab")
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
	    child_1.constructor.should.eql Child
	    child_1.should.be_a Child
	end
    end
end
