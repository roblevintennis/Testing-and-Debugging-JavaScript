// Pseudoclassical Inheritance
function Animal(name) {
    this.name = name;
    this.arr = [1,2,3];
}
Animal.prototype = {
    constructor: Animal,
    whoAmI: function() { return "I am " + this.name + "!\n"; }
};

function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}
Dog.prototype = new Animal();
Dog.prototype.getBreed = function() {
    return this.breed;
}
Dog.prototype.bark = function() {
    return 'ruff ruff';
}

// Combination Inheritance
function Parent(name) {
    this.name = name;
    this.arr = [1,2,3];
}
Parent.prototype = {
    constructor: Parent,
    toString: function() { return "My name is " + this.name; }
}
function Child(name, age) {
    this.age = age;
    Parent.call(this, name);
}
Child.prototype.getAge = function() {
    return this.age;
}

