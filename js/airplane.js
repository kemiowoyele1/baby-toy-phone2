


var   callScreen1 = document.querySelector(".call-screen");
var sound1 = document.querySelector("#sound");
var tile1 = document.querySelector(".tile1");
var tile2 = document.querySelector(".tile2");
var tile3 = document.querySelector(".tile3");
var tile4 = document.querySelector(".tile4");
var tile5 = document.querySelector(".tile5");
var tile6 = document.querySelector(".tile6");
var tile7 = document.querySelector(".tile7");
var tile8 = document.querySelector(".tile8");
var btnAnimal1 = document.querySelector(".btn-animal1");
var btnAnimal2 = document.querySelector(".btn-animal2");
var btnAnimal3 = document.querySelector(".btn-animal3");
var btnAnimal4 = document.querySelector(".btn-animal4");
var btnAnimal5 = document.querySelector(".btn-animal5");
var btnAnimal6 = document.querySelector(".btn-animal6");
var btnAnimal7 = document.querySelector(".btn-animal7");
var btnAnimal8 = document.querySelector(".btn-animal8");
var btnAnimal9 = document.querySelector(".btn-animal9");
var music1 = document.querySelector(".music");
var poem1 = document.querySelector(".poems");
var calls = document.querySelector(".calls");


function showAnimal(){
    // overlay.style.display = "block";
      callScreen1.style.display = "block";
      callScreen1.style.backgroundSize = "100% 100%";
    screen2.style.display = "none";
    sound1.play();
        }


function   playPiano(){
    callScreen1.style.display = "block";
    callScreen1.style.backgroundImage = "url(../images/music.gif)";
    callScreen1.style.backgroundSize = "100% 100%";
  screen2.style.display = "none";
     sound1.play();
    
} 

btnAnimal1.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/cat.png)"
      callScreen1.style.backgroundImage = "url(../images/animals/cat.png)";
    sound1.src = "../sounds/animals/cat.wav"
    showAnimal()
})


btnAnimal2.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/chicken.png)"
      callScreen1.style.backgroundImage = "url(../images/animals/chicken.png)";
    sound1.src = "../sounds/animals/chicken.mp3"
    showAnimal()
})


btnAnimal3.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/cow.png)"
      callScreen1.style.backgroundImage = "url(../images/animals/cow.png)";
    sound1.src = "../sounds/animals/cow.wav"
    showAnimal()
})


btnAnimal4.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/dog.png)"
      callScreen1.style.backgroundImage = "url(../images/animals/dog.png)";
    sound1.src = "../sounds/animals/dog.mp3"
    showAnimal()
})


btnAnimal5.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/duck.png)"
      callScreen1.style.backgroundImage = "url(../images/animals/duck.png)";
    sound1.src = "../sounds/animals/duck.wav"
    showAnimal()
})


btnAnimal6.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/elephant.png)"
      callScreen1.style.backgroundImage = "url(../images/animals/elephant.png)";
    sound1.src = "../sounds/animals/elephant.wav"
    showAnimal()
})


btnAnimal7.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/lion.png)"
      callScreen1.style.backgroundImage = "url(../images/animals/lion.png)";
    sound1.src = "../sounds/animals/lion.wav"
    showAnimal()
})


btnAnimal8.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/pig.png)"
      callScreen1.style.backgroundImage = "url(../images/animals/pig.png)";
    sound1.src = "../sounds/animals/pig.mp3"
    showAnimal()
})


btnAnimal9.addEventListener("click", function(){
    // screen2.style.background = "url(../images/animals/tiger.png)"
      callScreen1.style.backgroundImage = "url(../images/animals/tiger.png)";
    sound1.src = "../sounds/animals/tiger.mp3"
    showAnimal()
})

poem1.addEventListener("click", function(){
    var randomPoem = Math.floor(Math.random()*6) + 1;
    // screen2.style.background = "url(../images/animals/tiger.png)"
      callScreen1.style.backgroundImage = "url(../images/music.gif)";
    sound1.src = "../sounds/song" + randomPoem + ".mp3";
    sound1.play();
    screen2.style.display = "none";
    callScreen1.style.display = "block";
    callScreen1.style.backgroundSize = "100% 100%";

})

calls.addEventListener("click", function(){
    var randomCall = Math.floor(Math.random()*4);
    var randomCallImg = Math.floor(Math.random()*9);
    // screen2.style.background = "url(../images/animals/tiger.png)"
      callScreen1.style.backgroundImage = "url(../callers/" + randomCallImg +".png)";
    sound1.src = "../sounds/babies/" + randomCall + ".mp3";
    sound1.play();
    screen2.style.display = "none";
    callScreen1.style.display = "block";
    callScreen1.style.backgroundSize = "100% 100%";

})




tile1.addEventListener("click", function(){
    sound1.src = "../sounds/C4.mp3"
      playPiano()
})


tile2.addEventListener("click", function(){
    sound1.src = "../sounds/D4.mp3"
      playPiano()
 
})


tile3.addEventListener("click", function(){
    sound1.src = "../sounds/E4.mp3"
      playPiano()
  
})


tile4.addEventListener("click", function(){
    sound1.src = "../sounds/F4.mp3"
      playPiano()
   
})


tile5.addEventListener("click", function(){
    sound1.src = "../sounds/G4.mp3"
      playPiano()
   
})


tile6.addEventListener("click", function(){
    sound1.src = "../sounds/A4.mp3"
      playPiano()
   
})


tile7.addEventListener("click", function(){
    sound1.src = "../sounds/B4.mp3"
      playPiano()
   
})


tile8.addEventListener("click", function(){
    sound1.src = "../sounds/C5.mp3"
      playPiano()
    
})


sound1.addEventListener("ended", function(){
  sound1.currentTime = 0;
        sound1.pause();
          callScreen1.style.display = "none"
          music1.play();
  
})

sound1.addEventListener("playing", function(){
  // alert("playing");
        music1.pause();
          
})




