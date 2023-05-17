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
var btnb10 = document.querySelector(".btnb10");
var music = document.querySelector("#music");
var callScreen1 = document.querySelector(".call-screen");

function playSound(){
    screen2.style.display = "block";
    screen2.style.backgroundSize = "100% 100%";
    sound1.play();
    callScreen1.style.display = "none"
   
    // setTimeout(function(){
    //     screen2.style.display = "none"
    // }, 2500)
}

btnb1.addEventListener("click", function(){
    sound1.src = "../sounds/1.mp3"
    screen2.textContent = 1;
    playSound()
})


btnb2.addEventListener("click", function(){
    sound1.src = "../sounds/2.mp3";
    screen2.textContent = 2;
   
    playSound()
})

btnb3.addEventListener("click", function(){
    sound1.src = "../sounds/3.mp3";
    screen2.textContent = 3;
    playSound()
})


btnb4.addEventListener("click", function(){
    sound1.src = "../sounds/4.mp3";
    screen2.textContent = 4;
    playSound()
})


btnb5.addEventListener("click", function(){
    sound1.src = "../sounds/5.mp3";
    screen2.textContent = 5;
    playSound()
})


btnb6.addEventListener("click", function(){
    sound1.src = "../sounds/6.mp3";
    screen2.textContent = 6;
    playSound()
})


btnb7.addEventListener("click", function(){
    sound1.src = "../sounds/7.mp3";
    screen2.textContent = 7;
   
    playSound()
})


btnb8.addEventListener("click", function(){
    sound1.src = "../sounds/8.mp3";
    screen2.textContent = 8;
   
    playSound()
})


btnb9.addEventListener("click", function(){
    sound1.src = "../sounds/9.mp3";
    screen2.textContent = 9;
    
     playSound()
 })

 btnb10.addEventListener("click", function(){
    sound1.src = "../sounds/10.mp3";
    screen2.textContent = 10;
    
     playSound()
 })
  
sound1.addEventListener("ended", function(){
  sound1.currentTime = 0;
        sound1.pause();
          screen2.style.display = "none"
          music.play();
  
})

sound1.addEventListener("playing", function(){
  // alert("playing");
        music.pause();
          
})

