var screen2 = document.querySelector(".screen2");
var overlay = document.querySelector(".overlay")
var callScreen = document.querySelector(".callscreen2");
var screen2 = document.querySelector(".screen2");
var sound1 = document.querySelector("#sound");
var span1 = document.querySelector(".span1");
var span2 = document.querySelector(".span2");
var span3 = document.querySelector(".span3");
var span4 = document.querySelector(".span4");
var span5 = document.querySelector(".span5");
var span6 = document.querySelector(".span6");
var span7 = document.querySelector(".span7");
var span8 = document.querySelector(".span8");
var span9 = document.querySelector(".span9");
var btnb1 = document.querySelector(".btnb1");
var btnb2 = document.querySelector(".btnb2");
var btnb3 = document.querySelector(".btnb3");
var btnb4 = document.querySelector(".btnb4");
var btnb5 = document.querySelector(".btnb5");
var btnb6 = document.querySelector(".btnb6");
var btnb7 = document.querySelector(".btnb7");
var btnb8 = document.querySelector(".btnb8");
var btnb9 = document.querySelector(".btnb9");
var music = document.querySelector(".music");

function showAnimal(){
    // overlay.style.display = "block";
    // screen2.style.display = "block";
    // callScreen.style.backgroundSize = "100% 100%";
    // screen2.style.backgroundSize = "100% 100%";
    sound1.play();
    // setTimeout(function(){
    //     sound1.currentTime = 0;
    //     sound1.pause();
        // overlay.style.display= "none";
        // screen2.style.display = "none"
    // }, 4000)
}

btnb1.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/cat.png)"
    // callScreen.style.background = "url(../images/animals/cat.png)";
    sound1.src = "../sounds/animals/cat.wav"
    showAnimal()
})


btnb2.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/chicken.png)"
    // callScreen.style.background = "url(../images/animals/chicken.png)";
    sound1.src = "../sounds/animals/chicken.mp3"
    showAnimal()
})


btnb3.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/cow.png)"
    // callScreen.style.background = "url(../images/animals/cow.png)";
    sound1.src = "../sounds/animals/cow.wav"
    showAnimal()
})


btnb4.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/dog.png)"
    // callScreen.style.background = "url(../images/animals/dog.png)";
    sound1.src = "../sounds/animals/dog.mp3"
    showAnimal()
})


btnb5.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/duck.png)"
    // callScreen.style.background = "url(../images/animals/duck.png)";
    sound1.src = "../sounds/animals/duck.wav"
    showAnimal()
})


btnb6.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/elephant.png)"
    // callScreen.style.background = "url(../images/animals/elephant.png)";
    sound1.src = "../sounds/animals/elephant.wav"
    showAnimal()
})


btnb7.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/lion.png)"
    // callScreen.style.background = "url(../images/animals/lion.png)";
    sound1.src = "../sounds/animals/lion.wav"
    showAnimal()
})


btnb8.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/pig.png)"
    // callScreen.style.background = "url(../images/animals/pig.png)";
    sound1.src = "../sounds/animals/pig.mp3"
    showAnimal()
})


btnb9.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/tiger.png)"
    // callScreen.style.background = "url(../images/animals/tiger.png)";
    sound1.src = "../sounds/animals/tiger.mp3"
    showAnimal()
})

