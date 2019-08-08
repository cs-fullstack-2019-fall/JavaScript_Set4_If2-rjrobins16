//Ask the user to enter their age. Check if they entered a value between 0 and 125.
// If valid, print "REAL AGE". If invalid print “NOT A REAL AGE!!!”

var age = prompt("Enter your age.");
var validAGE = parseInt(age);
if (validAGE === 0 && validAGE <=125)
	// This reads if the age is equal to 0 and the age is less than or equal to 125. This will always be false.
{
    alert("REAL AGE")
}

else if (validAGE < 0 && validAGE > 125)
	// This reads if the age is less than 0 and greater than 125. This will always be false.

{
    alert("NOT A REAL AGE!")
}


