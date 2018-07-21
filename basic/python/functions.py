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
    return Profile("Laxman",25)

class Profile:
    def __init__(self,name,age) :
        self.name = name 
        self.age = age 

sayMyNamePy("Laxman")
print(giveMyNamePy())
print(giveMyProfilePy().name + "  "+str(giveMyProfilePy().age))


