
var options = [


    {
    "question": "10 + 5 + 5",
    "answer": "20",
    },
     {
    "question": "six + two",
    "answer": "8",
    },
     {
    "question": "one hundred and one",
    "answer": "101",
    },
    {
   "question": "3 * 3",
   "answer": "9",
   },
   {
  "question": "five hundred and twenty five",
  "answer": "525",
  },
  {
 "question": "7 + 2 + 1",
 "answer": "10",
 },
 {
"question": "two hundred and thirty",
"answer": "230",
},
{
"question": "3 + 3 + 3",
"answer": "9",
},
 
     {
    "question": "eight hundred and seventeen",
    "answer": "817",
    },   
    {
   "question": "eighty one",
   "answer": "81",
   },   
]

var popAnswer = document.getElementById('pop-answer');
var Qpop = document.getElementById('q-pop');
var btnb12 = document.querySelector('.btnb12');
var phone = document.querySelector('.phone');
var adPage = document.querySelector('.adPage');
var submitBtn = document.querySelector('.submit-pop');
var popAnswer = document.getElementById('pop-answer');
var btnb1 = document.querySelector('.btnb1');
var btnb2 = document.querySelector('.btnb2');
var btnb3 = document.querySelector('.btnb3');
var btnb4 = document.querySelector('.btnb4');
var btnb5 = document.querySelector('.btnb5');
var btnb6 = document.querySelector('.btnb6');
var btnb7 = document.querySelector('.btnb7');
var btnb8 = document.querySelector('.btnb8');
var btnb9 = document.querySelector('.btnb9');
var btnb10 = document.querySelector('.btnb10');
var btnb11 = document.querySelector('.btnb11');
var btnb12 = document.querySelector('.btnb12');
var adPage = document.querySelector('.adPage');
var backToHomePageTime;

btnb1.addEventListener('click', function (){
    popAnswer.value = popAnswer.value + '1';
})
btnb2.addEventListener('click', function (){
    popAnswer.value = popAnswer.value + '2';
})
btnb3.addEventListener('click', function (){
    popAnswer.value = popAnswer.value + '3';
})
btnb4.addEventListener('click', function (){
    popAnswer.value = popAnswer.value + '4';
})
btnb5.addEventListener('click', function (){
    popAnswer.value = popAnswer.value + '5';
})
btnb6.addEventListener('click', function (){
    popAnswer.value = popAnswer.value + '6';
})
btnb7.addEventListener('click', function (){
    popAnswer.value = popAnswer.value + '7';
})
btnb8.addEventListener('click', function (){
    popAnswer.value = popAnswer.value + '8';
})
btnb9.addEventListener('click', function (){
    popAnswer.value = popAnswer.value + '9';
})
btnb10.addEventListener('click', function (){
    popAnswer.value = popAnswer.value + '0';
})
 btnb11.addEventListener('click', function (){
    popAnswer.value = '';
})




var r1 = Math.floor(Math.random()* options.length);
// var r1 = 0;
var q = options[r1];
  
function loadquestion (currentQuestion) {
	 r1 = Math.floor(Math.random()* options.length);
     popAnswer.value = '';
	// var q = questions[r1];
	q = options[r1];
  Qpop.textContent=  q.question;
 backToHomePageTime = setTimeout(function name(params) {
    window.location = "../index.html"
 
    
 }, 40000);
}


loadquestion (r1)

function reWrite(r1) {
    popAnswer.value = '';
     r1 = Math.floor(Math.random()* options.length);
     q = options[r1];
    Qpop.textContent=  q.question;
    console.log("answer = " + q.answer)
       return r1
}
btnb12.addEventListener('click', function (){
    onSubmitAction ()
    })
    
// submitBtn.addEventListener('click', function (){
//     onSubmitAction ()
//     })
   function displayAds () {
        phone.style.display = "none";
        adPage.style.display = "block";
        clearTimeout(backToHomePageTime)
   }
   function onSubmitAction () {
    if (popAnswer.value == q.answer) {
        console.log('winner')
        displayAds ()
    }else{
        console.log(popAnswer.value)
        reWrite(r1)
    }
   }

