# Functions -> Should be defined before being called.
"""
So there will be list of functions at the top, then their use
in the bottom of the document, this can also make programmers 
separate the functions in different files to make the code more
readable.
"""


# Functions
def sayMyNamePy(name):
    print(name)


def giveMyNamePy():
    return "Laxman"


def giveMyProfilePy():
    return Profile("Laxman", 25)


def giveMeToValuesPy():
    return "Laxman", 25


class Profile:
    def __init__(self, name, age):
        self.name = name
        self.age = age


class PersonPy:
    def __init__(self, name):
        self.name = name

    def greeting(self):
        print("Hi ! I'm "+self.name + ".")
        return "Greeted " + self.name + " Successfully"


sayMyNamePy("Laxman")
print(giveMyNamePy())
print(giveMyProfilePy().name + "  "+str(giveMyProfilePy().age))
name, age = giveMeToValuesPy()
print("From two values function : "+name + "  "+str(age))
myName = giveMyNamePy()
myName = 6
print(myName)
person = PersonPy("Laxman")
print(person.greeting())
