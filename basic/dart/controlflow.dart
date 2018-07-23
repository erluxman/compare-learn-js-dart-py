void main() {
  checkEra(1545);
  checkEra("da");
}

checkEra(year) {
  if (year is int) {
    if (year >= 2000)
      print("21st century");
    else if (year >= 1900)
      print("20th century");
    else
      print("Ancient age");
  } else {
    print("Sorry the input is not integer");
  }
}
