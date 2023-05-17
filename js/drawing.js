
        var paint1 = document.getElementById('color1');
        var paint2 = document.getElementById('color2');
  var paint3 = document.getElementById('color3');
  var paint4 = document.getElementById('color4');
  var paint5 = document.getElementById('color5');
  var paint6 = document.getElementById('color6');
 var paint7 = document.getElementById('color7');
 var paint8 = document.getElementById('color8');
 var paint9 = document.getElementById('color9');
var eraser = document.getElementById('erase');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d'); 

window.addEventListener('load', function(){
// // variables
var painting = false;
function startPosition(e){
painting = true;
draw(e);
}
function finishedPosition(){
    painting = false;
     ctx.beginPath();

}
// Resizing
canvas.height= window.innerHeight;
 canvas.width = window.innerWidth;


  paint1.addEventListener('click', function(){
     ctx.strokeStyle = "blue";
})
paint2.addEventListener('click', function(){
     ctx.strokeStyle = "rgb(202, 5, 5)";
})
 paint3.addEventListener('click', function(){
     ctx.strokeStyle = "green";
})
 paint4.addEventListener('click', function(){
     ctx.strokeStyle = "purple";
})
 paint5.addEventListener('click', function(){
     ctx.strokeStyle = "deeppink";
})
 paint6.addEventListener('click', function(){
     ctx.strokeStyle = "yellow";
})
 paint7.addEventListener('click', function(){
     ctx.strokeStyle = "black";
})
 paint8.addEventListener('click', function(){
     ctx.strokeStyle = "sandybrown";
})
 paint9.addEventListener('click', function(){
     ctx.strokeStyle = "orangered";
})
function draw(e){
  
if(!painting) return;
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
ctx.stroke();
 ctx.beginPath();
 ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY);

}
  

//Event listeners

canvas.addEventListener('touchstart', startPosition);
canvas.addEventListener('touchend', finishedPosition);
canvas.addEventListener('touchmove', draw);
})

eraser.addEventListener('click', erazeDrawing);

function erazeDrawing (){
      
    ctx.clearRect(0, 0, innerWidth, innerHeight);

}