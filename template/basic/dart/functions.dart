void main() {
  sayMyNameDart("Laxman");
  print(giveMyNameDart());
  print(giveMyProfileDart().name + " " + giveMyProfileDart().age.toString());
}


//functions
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
