void main() {
  checkEra(1545);
  checkEra("da");
  useSwitchDart(2);
}

useSwitchDart(number) {
  switch (number) {
    case 1:
      print(number);
      break;
    case 2:
      print(number);
      break;
    case 3:
      print(number);
      break;
    nowClosed: //Like goto statement n C but with the use of continue.
    case 4:
      print(number);
      break;
  }
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
