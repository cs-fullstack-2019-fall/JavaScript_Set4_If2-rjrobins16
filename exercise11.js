//Ask the user to enter their grade. Print their letter grade:
//A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59
//If it's negative or over 100 print an error.

var grade = prompt("Enter your grade.");
var gradeInt = parseInt(grade);

if (gradeInt > 100 || gradeInt < 0)
{
    alert("ERROR")
}

else if ( gradeInt <= 100 && gradeInt >= 90)
{
    alert("A")
}

else if ( gradeInt <= 89 && gradeInt >= 80)
{
    alert("B")
}

else if ( gradeInt <= 79 && gradeInt >= 70)
{
    alert("C")
}

else if ( gradeInt <= 69 && gradeInt >= 60)
{
    alert("D")
}

else if ( gradeInt <= 59 && gradeInt >= 0)
{
    alert("F")
}
