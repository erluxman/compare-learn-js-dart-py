
sayMyNameTS("Laxman");
console.log(giveMyNameTS());
console.log(giveMyProfileTS().name + "  " + giveMyProfileTS().age);



//Functions

function sayMyNameTS(name: String) {
    console.log("Hey " + name);
  }
  
  function giveMyNameTS() {
    return "Laxman";
  }
  
  function giveMyProfileTS()  {
    return { name: "Laxman", age: 25 };
  }
  