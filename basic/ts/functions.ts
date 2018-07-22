sayMyNameTS("Laxman");
print(giveMyNameTS());

// We cannot do this in typescript
/*
var myName = giveMyNameTS();
myName = 6;
print(myName);
*/
print(giveMyProfileTS().name + "  " + giveMyProfileTS().age);

class PersonTS {
  name: string;
  greeting = function() {
    print("Hi! I'm " + this.name + ".");
    return "Greeted " + this.name + " Successfully";
  };
  constructor(name: string) {
    this.name = name;
  }
}

let userTS = new PersonTS("Laxman");
print(userTS.greeting());

//Functions -> Can be defined below the invocation
function sayMyNameTS(name: String) {
  print("Hey " + name);
}

function print(variable: Object) {
  console.log(variable);
}

function giveMyNameTS() {
  return "Laxman";
}

function giveMyProfileTS() {
  return { name: "Laxman", age: 25 };
}
