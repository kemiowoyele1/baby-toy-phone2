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
var endCall = document.querySelector(".end-call");
var music = document.querySelector("#music");
var chat1 = document.querySelector(".chat");
var chatArray = ["what's up", "hi", "hello", "I love you", "you are my freind"]
var stopTimer;
function cutCall(){
    sound1.currentTime = 0;
    sound1.pause();
    callScreen.style.display = "none";
    chat1.style.display = "none";
    chat1.textContent = "";
    
       clearTimeout(stopTimer)
}
function showAnimal(){
    randomSound = Math.ceil(Math.random()*3);
    chat1.style.display = "block";
    callScreen.style.display = "block";
    callScreen.style.backgroundSize = "100% 100%";
    screen2.style.backgroundSize = "100% 100%";
    sound1.src = "../sounds/dail.mp3"
    sound1.play();
    stopTimer = setTimeout(function(){
        sound1.src = "../sounds/babies/" + randomSound + ".mp3"
        sound1.play();
       var randomChat = Math.floor(Math.random()*chatArray.length);
       chat1.textContent = chatArray[randomChat];
     }, 5000)
   }

btnb1.addEventListener("click", function(){
     callScreen.style.background = "url(../callers/0.png)";
    showAnimal()
})


btnb2.addEventListener("click", function(){
    callScreen.style.background = "url(../callers/1.png)";
    showAnimal()
})


btnb3.addEventListener("click", function(){
    callScreen.style.background = "url(../callers/2.png)";
    showAnimal()
})


btnb4.addEventListener("click", function(){
    callScreen.style.background = "url(../callers/3.png)";
    showAnimal()
})


btnb5.addEventListener("click", function(){
    callScreen.style.background = "url(../callers/4.png)";
    showAnimal()
})


btnb6.addEventListener("click", function(){
    callScreen.style.background = "url(../callers/5.png)";
    showAnimal()
})


btnb7.addEventListener("click", function(){
    callScreen.style.background = "url(../callers/6.png)";
    showAnimal()
})


btnb8.addEventListener("click", function(){
    callScreen.style.background = "url(../callers/7.png)";
    showAnimal()
})


btnb9.addEventListener("click", function(){
    callScreen.style.background = "url(../callers/8.png)";
    showAnimal()
})


// sound1.addEventListener("ended", function(){
//         cutCall();
//         music.play();
  
// })



sound1.addEventListener("playing", function(){
  // alert("playing");
        music.pause();
          
})


