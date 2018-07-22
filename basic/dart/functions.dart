void main() {
  sayMyNameDart("Laxman");
  print(giveMyNameDart());
  print(giveMyProfileDart().name + " " + giveMyProfileDart().age.toString());

  //Cannot do this in dart either
  /* 
  var myName = giveMyNameDart();
  myName = 6; 
  */

  var person = PersonDart("Laxman");
  print(person.greeting());
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

class PersonDart {
  PersonDart(this.name);
  String name;
  String greeting() {
    print("Hi! I'm " + this.name + ".");
    return "Greeted " + this.name + " Successfully";
  }
}
