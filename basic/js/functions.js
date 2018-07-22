sayMyNameJS("Laxman");
print(giveMyNameJS());
print(giveMyProfileJS().name + "  " + giveMyProfileJS().age);
var myName = giveMyNameJS();
myName =  6;
print(myName)

//Functions -> Can be defined below the invocation
function sayMyNameJS(name) {
  print("Hey " + name);
}

function print(variable){
  console.log(variable)
}

function giveMyNameJS() {
  return "Laxman";
}

function giveMyProfileJS() {
  return { name: "Laxman", age: 25 };
}