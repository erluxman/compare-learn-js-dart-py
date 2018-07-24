console.log("!! JS : Hello World !!");

var variable = { name: "Laxman" };
print(variable.name);

function Container(param) {
  dec = function() {
    if (secret > 0) {
      secret -= 1;
      return true;
    } else {
      return false;
    }
  };

  this.decrease = function() {
    dec();
  };

  this.member = param;
  var secret = 3;
  var that = this;
}

function TestObject(name) {
  this.name = name;
  this.printName = function() {
    print(this.name);
  };
}

//
/* 
let testContainer = new Container("Laxman");
print(testContainer.decrease());
print(testContainer.dec());
let container = new TestObject("Laxman");
print(container.printName());
 */
function PersonJS(name) {
  this.name = name;
  this.greeting = function() {
    print("Hi! I'm " + this.name + ".");
    return "Greeted " + this.name + " Successfully";
  };
}
let userJS = new PersonJS("Laxman");
//print(userJS.greeting());
let testContainer = new Container("Laxman");
print(testContainer.decrease());


function print(variable) {
  console.log(variable);
}
