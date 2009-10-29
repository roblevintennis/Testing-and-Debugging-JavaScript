// Pseudoclassical Inheritance
function Animal(name) {
    this.name = name;
    this.arr = [1,2,3];
};
Animal.prototype = {
    constructor: Animal,
    whoAmI: function() { return "I am " + this.name + "!\n"; }
};

function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
};
Dog.prototype = new Animal();
Dog.prototype.getBreed = function() {
    return this.breed;
};
Dog.prototype.bark = function() {
    return 'ruff ruff';
};

// Combination Inheritance
function Parent(name) {
    this.name = name;
    this.arr = [1,2,3];
};
Parent.prototype = {
    constructor: Parent,
    toString: function() { return "My name is " + this.name; }
};
function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
};

Child.prototype = new Parent();

Child.prototype.getAge = function() {
    return this.age;
};

// Prototypal Inheritance
Object.prototype.inherit = function(p) {
    NewObj = function(){};
    NewObj.prototype = p;
    return new NewObj(); 
};

// Paraphrasing of Nicholas Zakas's Prototype Inheritance helper
function inheritPrototype(subType, superType) {
    var prototype = Object.inherit(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
};
function SubType(name, age) {
    Parent.call(this, name);
    this.age = age;    
};
//Child.prototype = new Parent();   // Gets replaced by:
inheritPrototype(SubType, Parent);  // Clobbers global object - would be better to namespace this!
SubType.prototype.getAge = function() {
    return this.age;
};

// Functional - Durable Pattern
function super_func(blueprint) { 
    var obj = {};
    obj.getName = function() { return blueprint.name; };
    obj.getAge  = function() { return blueprint.age; };
    obj.getFoo  = function() { return blueprint.foo; };
    obj.getBar  = function() { return blueprint.bar; };
    return obj;
};
function sub_func(blueprint) {
    blueprint.name = blueprint.name || "Crockford's Place";
    supr = super_func(blueprint);
    supr.coolAugment = function() { return "I give a fresh new perspective on things!" };
    return supr;    
};
