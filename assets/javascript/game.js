

//this function resets the game

function reset() {


// first I'll create variable that will hold the values of random number and each of the jewels

var randomnumber = (Math.floor(Math.random() * 103)) + 18;
console.log("the random number chosen is " + randomnumber);

var redjewelnumber = (Math.floor(Math.random()* 12) + 1);
console.log( "red is " + redjewelnumber);

var bluejewelnumber = (Math.floor(Math.random()* 12) + 1);
console.log( "blue is " + bluejewelnumber);

var greenjewelnumber = (Math.floor(Math.random()* 12)+ 1);
console.log( "green is " + greenjewelnumber);

var yellowjewelnumber = (Math.floor(Math.random()* 12)+ 1);
console.log( "yellow is " + yellowjewelnumber);

//some other variables I'll use later

var totalnumber = 0;

}; //end game reset

//this function will check if we've won

function wintest() {
}

// now we have the numbers, I will create an onclick event listener that grabs the number of the respective jewel, and adds it to the
//total for the user

$("#red").on("click", function() {
 totalnumber = totalnumber + redjewelnumber;
 console.log("total number is now " + totalnumber);
 $("#totalscore").text(totalnumber);
});

$("#blue").on("click", function() {
    totalnumber = totalnumber + bluejewelnumber;
    console.log("total number is now " + totalnumber);
    $("#totalscore").text(totalnumber);
});

$("#green").on("click", function() {
    totalnumber = totalnumber + greenjewelnumber;
    console.log("total number is now " + totalnumber);
    $("#totalscore").text(totalnumber);
});

$("#yellow").on("click", function() {
    totalnumber = totalnumber + yellowjewelnumber;
    console.log("total number is now " + totalnumber);
    $("#totalscore").text(totalnumber);
});