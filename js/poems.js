var eye = document.querySelector(".eye");
var eye2 = document.querySelector(".eye2");
var mouth = document.querySelector(".mouth-top")
var callScreen = document.querySelector(".callscreen2");
var penguin = document.querySelector(".penguin");
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
var music = document.querySelector("#music");

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
    sound1.src = "../sounds/song1.mp3"
    showAnimal()
})


btnb2.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/chicken.png)"
    // callScreen.style.background = "url(../images/animals/chicken.png)";
    sound1.src = "../sounds/song2.mp3"
   showAnimal()
})


btnb3.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/cow.png)"
    // callScreen.style.background = "url(../images/animals/cow.png)";
    sound1.src = "../sounds/song3.mp3"
   showAnimal()
})


btnb4.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/dog.png)"
    // callScreen.style.background = "url(../images/animals/dog.png)";
    sound1.src = "../sounds/song4.mp3"
   showAnimal()
})


btnb5.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/duck.png)"
    // callScreen.style.background = "url(../images/animals/duck.png)";
    sound1.src = "../sounds/song5.mp3"
    showAnimal()
})


btnb6.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/elephant.png)"
    // callScreen.style.background = "url(../images/animals/elephant.png)";
    sound1.src = "../sounds/song6.mp3"
    showAnimal()
})

sound1.addEventListener("playing", function(){
    eye.style.animation = "mouth 0.5s infinite ease";
    eye2.style.animation = "mouth 0.5s infinite ease";
    mouth.style.animation = "mouth 0.5s infinite ease";
    penguin.style.animation = "dance 1s infinite ease";
})

sound1.addEventListener("ended", function(){
    eye.style.animation = "none";
    eye2.style.animation = "none";
    mouth.style.animation = "none";
    penguin.style.animation = "none";
        music.play();
  
})



sound1.addEventListener("playing", function(){
  // alert("playing");
        music.pause();
          
})

