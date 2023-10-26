var startButtonEl = document.getElementById("startButton");
var headlineEl = document.getElementById("headline");
var bylineEl = document.getElementById("byline");
var multiChoiceListEl = document.getElementById("multiChoiceList");
var multiChoiceButtonEl = document.getElementsByClassName("multiChoice");
var msgAreaEl = document.getElementById("msgArea");
var timerEl = document.getElementById("timer");
var secondsLeft = 76;
var quizArray = [
  { quizSlide: "0", 
    question: "Commmonly used data types DO NOT include:",
    options: ["strings","booleans","alerts","numbers"],
    correct: "alerts"},
  { quizSlide: "1",
    question: "The condition in an if/else statement is enclosed within:",
    options: ["quotes","curly brackets","parentheses","square brackets"],
    correct: "parentheses"},
  { quizSlide: "2",
    question: "Arrays in JavaScript can be used to store:",
    options: ["numbers and strings","other arrays","booleans","all of the above"],
    correct: "all of the above"},
  { quizSlide: "3",
    question: "String values must be enclosed within _____ when being assigned to variables.",
    options: ["commas","curly brackets","quotes","parentheses"],
    correct: "quotes"},
  { quizSlide: "4",
    question: "A useful development and debugging tool for printing content to the debugger is:",
    options: ["JavaScript","terminal/bash","for loops","console log"],
    correct: "console log"}
  ]
var score = [];
var penalties = [];
var quizSlide = 0;

var choiceAEl = document.getElementById("choiceA");
var choiceBEl = document.getElementById("choiceB");
var choiceCEl = document.getElementById("choiceC");
var choiceDEl = document.getElementById("choiceD");

function countdown() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Timer:  " + secondsLeft + "s";

    if(secondsLeft === 0 || msgAreaEl.includes("Wrong!")) {
      clearInterval(timerInterval);
      restartCountdown(timerEl.currentvalue); 
    }
    
  }, 1000);

  runQuiz();
};

function restartCountdown() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Timer:  " + secondsLeft + "s";
  }, 1000); 
};

function runQuiz() {
  //this function is using the variable quizSlide with the value I gave to it globally (0) as an index number of the array. I would like its value to increment each time this function is run but I don't know how to set that up.  I would also like to loop through the buttons by putting them in an array with a forEach method, but I don't know how to set that up when the other side of the equation is also changing 
  bylineEl.textContent = quizArray[quizSlide]["question"];
  bylineEl.style.fontSize = "34px";

  multiChoiceListEl.style.display = "block";
  choiceAEl.textContent = quizArray[quizSlide]["options"][0];
  choiceBEl.textContent = quizArray[quizSlide]["options"][1];
  choiceCEl.textContent = quizArray[quizSlide]["options"][2];
  choiceDEl.textContent = quizArray[quizSlide]["options"][3];
};

startButtonEl.addEventListener("click", function(event) {
  headlineEl.style.visibility = "hidden";
  bylineEl.textContent = "";  
  startButtonEl.style.display = "none";

  countdown();
});

function evaluateAnswer(event) {
  event.preventDefault();
  if(e.target.value = quizArray[quizSlide]["correct"]){
    score.push(20);
    msgAreaEl.textContent = "Correct!"
    msgAreaEl.style.fontSize = "24px";
    msgAreaEl.style.borderTop = "5px solid var)--ultramarine)";
  } else {
    score.push(0);
    penalties.push(10);
    msgAreaEl.textContent = "Wrong! The correct answer was " + quizArray[quizSlide]["correct"] + ".";

  };

multiChoiceButtonEl.addEventListener("click", evaluateAnswer);



/*
function displayMsg(); {



};

*/



  quizSlide = quizSlide++;

/*

  function evaluateAnswer(); {



return
};


*/

 





/*
// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();
*/
/*
multiChoiceButtonEl.addEventListener("click", function() {
  if(this.value == quizArray[quizSlide]["correct"]) { 
  msgAreaEl.textContent = "Correct!";
  msgAreaEl.style.fontSize = "24px";
  msgAreaEl.style.borderTop = "5px solid var(--ultramarine)";
  }
  else {
  msgAreaEl.textContent = "Wrong! The correct answer was " + quizArray[quizSlide]["correct"] + ".";

  };

  




/*
var a;
function show_hide()
{
  if (a==1)
  {
    document.getElementsByClassName("multichoice").style.display="inline";
    return a=0;
  }
  else
  { 
    document.getElementsByClassName("multiChoice").style.display="none";
    return a=1;
  }
}
*/


  
  /*
  multiChoiceButtonEl.style.justifyContent = "left";
  */

  /*
  var buttonText = "";

  console.log(multiChoiceButtonEl);
  console.log(document.querySelectorAll(".label"));

  multiChoiceButtonEl.forEach(li=>{
    buttonText+=li.textContent;
  }) 
  var text = "";
document.querySelectorAll(".label").forEach(div=>{
  text+=div.textContent;
});
});

answersArray.forEach(answersArray) => {
  let 
} )
*/ };