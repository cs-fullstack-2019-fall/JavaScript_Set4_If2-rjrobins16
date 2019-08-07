//Ask the user to enter their age. Check if they entered a value between 0 and 125.
// If valid, print "REAL AGE". If invalid print “NOT A REAL AGE!!!”

var age = prompt("Enter your age.");
var validAGE = parseInt(age);
if (validAGE === 0 && validAGE <=125)
{
    alert("REAL AGE")
}

else if (validAGE < 0 && validAGE > 125)

{
    alert("NOT A REAL AGE!")
}

