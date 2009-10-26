// js_obj_creation.js

function FancyProto(){}
FancyProto.prototype = {
  constructor : FancyProto,  // So that instance.contructor will == FancyProto and not Object!
  x : 100,
  y : 200,
  foo : function() { return "I am foo"; }
};

function SloppyProto(){}
SloppyProto.prototype = {
  //constructor : SloppyProto // instance.contructor will now be Object
  name : 'Sloppy Joe'
};

function Issues(){}
Issues.prototype = {
  x : 1,
  arr : ['uno','dos','tres'],
  hsh : {phone : 'iPhone', plan : 'ATT' }
}
