/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Scope
    -use the "'use strict'" string to get rid of all the global output stuff
    -if you invoke a function that uses the this keyword without binding it to anything you get undefined

* 2. implicit Binding
    -when the function is invoked the 'this' keyword looks to the left of the dot notation where its invoked
    -the function is part of an array 

* 3. New binding
    -Creates a new object for a function that being invoked with the 'new' keyword

* 4. Explicit binding
*   - when the function is invoked it needs a .call or .apply
    - the function is outside of an array therefore it can be used a lot
    - .call takes many arguements one at a time
    - .apply can take a arguments as an array
###############################################################################################
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
"use strict";

function sayName(name) {
  console.log(this);
  return name;
}
sayName("Reed");

// Principle 2
// code example for Implicit Binding

const me = {
  name: "Reed",
  age: 25,
  sayName: function() {
    console.log(this.name);
  }
};

me.sayName();

// Principle 3
// code example for New Binding

var Animal = function(color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal("black and white", "Zorro", "Zebra");
console.log(zebra);

// Principle 4
// code example for Explicit Binding

const sayNewName = function() {
  console.log("My new name is: " + this.name);
};

const newMe = {
  name: "Reeed",
  age: 25
};

sayNewName.call(newMe);
