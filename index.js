//Dice 1 Random Rotation

var randomNumber1 = Math.random() * 6; //assigning random number from 0-6

randomNumber1 = Math.floor(randomNumber1 + 1); //assigning random number from 1-6

var imageSource1 = "images/dice" + randomNumber1 + ".png"; //assigning dynmaic image path for dice "images/dice(random thrown dice number from 1-6).png"

var image1 = document.querySelectorAll("img")[0]; //selecting img attribute of both dices thus using selectorAll method here

image1.setAttribute("src", imageSource1); //assigning dynamic dice image path to selected html element

//Dice 1 Rotation Done!


//Dice 2 Random Rotation

var randomNumber2 = Math.floor(Math.random() * 6)+ 1;

var imageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageSource2);

//Dice 2 Rotation Done!

//Winner and Loser Decision Maker

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "⛳️Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = "Player2 Wins!⛳️";
}
else{
    document.querySelector('h1').innerHTML = "Draw!";
}




