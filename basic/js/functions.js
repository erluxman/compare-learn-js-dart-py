sayMyNameJS("Laxman");
print(giveMyNameJS());
print(giveMyProfileJS().name + "  " + giveMyProfileJS().age);
var myName = giveMyNameJS();
myName = 6;
print(myName);
var g = functionReturningFunctionJS();
print("Function Returning function  "+g());

function PersonJS(name) {
  this.name = name;
  this.greeting = function() {
    print("Hi! I'm " + this.name + ".");
    return "Greeted " + this.name + " Successfully";
  };
}
let userJS = new PersonJS("Laxman"); //OMG this freaking new keyword is must to create object
print(userJS.greeting());

//Functions -> Can be defined below the invocation
function sayMyNameJS(name) {
  print("Hey " + name);
}

function print(variable) {
  console.log(variable);
}

//function giveMyNameJS() => "Laxman"  -> This type of definition does not work
function giveMyNameJS() {
  return "Laxman";
}

function giveMyProfileJS() {
  return { name: "Laxman", age: 25 };
}

function functionReturningFunctionJS() {
  return function functionReturnedByFunctionJS() {
      return "This is function returned by function";
  }
}

