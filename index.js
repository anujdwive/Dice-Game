// For Image 1.......
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomNum1 + ".png"; //dice1.png - dice6.png
var randomImgSource  = "images/" + randomDiceImg; //images/dice1.png - dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource);

// For Image 2.......
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomNum2 + ".png"; //dice1.png - dice6.png
var randomImgSource  = "images/" + randomDiceImg; //images/dice1.png - dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Play 1 Wins! 😉";
}else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "😉 Play 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw! 😖";
}