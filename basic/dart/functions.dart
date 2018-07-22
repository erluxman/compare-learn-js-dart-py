void main() {
  sayMyNameDart("Laxman");
  print(giveMyNameDart());
  print(giveMyProfileDart().name + " " + giveMyProfileDart().age.toString());

  //Cannot do this in dart either
  /* 
  var myName = giveMyNameDart();
  myName = 6; 
  */
}

//Functions -> Can be defined below the invocation
void sayMyNameDart(String name) {
  print("Hey " + name);
}

String giveMyNameDart() {
  return "Laxman";
}

Profile giveMyProfileDart() {
  return Profile("Laxman", 25);
}

class Profile {
  Profile(this.name, this.age);
  String name;
  int age;
}
