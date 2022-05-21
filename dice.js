document.getElementById("btn").onclick = function() {
    var randomDice1 = Math.random() * 6;
    randomDice1 = Math.floor(randomDice1 + 1);
    var imageSource1 = "images/dice" + randomDice1 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src",imageSource1);

    var randomDice2 = Math.floor((Math.random()*6)+1);
    var imageSource2 = "images/dice" + randomDice2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

    if (randomDice1>randomDice2){

        document.getElementById("head").innerHTML = "Your First Idea is the best option💪";
        document.getElementById("head").style.fontSize = "4rem";

    }else if (randomDice1===randomDice2) {
    
        document.getElementById("head").innerHTML = "A tough one.Please role the dice again!🤘";
        document.getElementById("head").style.fontSize = "4rem";

    }else{
       
        document.getElementById("head").innerHTML = "Your Second Idea is the best option💪";
        document.getElementById("head").style.fontSize = "4rem";

    }
}   
