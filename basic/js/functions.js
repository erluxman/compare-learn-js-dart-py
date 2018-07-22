sayMyNameJS("Laxman");
print(giveMyNameJS());
print(giveMyProfileJS().name + "  " + giveMyProfileJS().age);
var myName = giveMyNameJS();
myName = 6;
print(myName);

function PersonJS(name) {
  this.name = name;
  this.greeting = function() {
    print("Hi! I'm " + this.name + ".");
    return "Greeted " + this.name + " Successfully";
  };
}
let userJS = new PersonJS("Laxman");
print(userJS.greeting());

//Functions -> Can be defined below the invocation
function sayMyNameJS(name) {
  print("Hey " + name);
}

function print(variable) {
  console.log(variable);
}

function giveMyNameJS() {
  return "Laxman";
}

function giveMyProfileJS() {
  return { name: "Laxman", age: 25 };
}
