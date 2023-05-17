var screen2 = document.querySelector(".screen2");
var screen1 = document.querySelector(".screen1");
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
var music = document.querySelector(".music");
var head1 = document.querySelector(".head-container");

function playSound(){
    screen1.style.display = "block";
    screen1.style.backgroundSize = "100% 100%";
    screen2.style.display = "block";
    screen2.style.backgroundSize = "100% 100%";
    sound1.play();
    setTimeout(function(){
        screen1.style.display = "none"
        screen2.style.display = "none"
        head1.style.transform = "rotate(0deg)"

    }, 500)
}

btnb1.addEventListener("click", function(){
    sound1.src = "../sounds/C4.mp3"
    playSound()
    head1.style.transform = "rotate(15deg)"
})


btnb2.addEventListener("click", function(){
    sound1.src = "../sounds/D4.mp3"
    playSound()
    head1.style.transform = "rotate(5deg)"

})


btnb3.addEventListener("click", function(){
    sound1.src = "../sounds/E4.mp3"
    playSound()
    head1.style.transform = "rotate(12deg)"

})


btnb4.addEventListener("click", function(){
    sound1.src = "../sounds/F4.mp3"
    playSound()
    head1.style.transform = "rotate(-15deg)"

})


btnb5.addEventListener("click", function(){
    sound1.src = "../sounds/G4.mp3"
    playSound()
    head1.style.transform = "rotate(-10deg)"

})


btnb6.addEventListener("click", function(){
    sound1.src = "../sounds/A4.mp3"
    playSound()
    head1.style.transform = "rotate(-6deg)"

})


btnb7.addEventListener("click", function(){
    sound1.src = "../sounds/B4.mp3"
    playSound()
    head1.style.transform = "rotate(7deg)"

})


btnb8.addEventListener("click", function(){
    sound1.src = "../sounds/C5.mp3"
    playSound()
    head1.style.transform = "rotate(-19deg)"

})


btnb9.addEventListener("click", function(){
    sound1.src = "../sounds/D5.mp3"
     playSound()
     head1.style.transform = "rotate(8deg)"

 })

 btnb10.addEventListener("click", function(){
    sound1.src = "../sounds/E5.mp3"
     playSound()
     head1.style.transform = "rotate(-21deg)"

 })
  


 
