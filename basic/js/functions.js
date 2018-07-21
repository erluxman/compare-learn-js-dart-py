sayMyNameJS("Laxman");
console.log(giveMyNameJS());
console.log(giveMyProfileJS().name + "  " + giveMyProfileJS().age);


//Functions
function sayMyNameJS(name) {
  console.log("Hey " + name);
}

function giveMyNameJS() {
  return "Laxman";
}

function giveMyProfileJS() {
  return { name: "Laxman", age: 25 };
}