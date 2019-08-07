// Exercise 10
//Ask the user for 3 cards. If the sum equals 21 print BLACKJACK! If the sum is greater than 21 print BUST!
    //If the sum is less than 21 print “The total is [TOTAL]”

var card1 = prompt("Enter a card.");
var card1int = parseInt(card1);
var card2 = prompt("Enter a second card.");
var card2int = parseInt(card2);
var card3 = prompt("Enter a third card.");
var card3int = parseInt(card3);
var cardSum = (card1int + card2int + card3int);

if (cardSum > 21)
{
    alert("BUST!")
}

else if (cardSum === 21)
{
    alert("BLACKJACK!")
}

else if (cardSum < 21)
{
    alert("The total is " + cardSum +".")
}