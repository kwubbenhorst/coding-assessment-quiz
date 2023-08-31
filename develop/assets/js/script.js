var startButtonEl = document.getElementById("startButton");
var headlineEl = document.getElementById("headline");
var bylineEl = document.getElementById("byline");
var multiChoiceListEl = document.getElementById("multiChoiceList");
var multiChoiceButtonEl = document.getElementsByClassName("multiChoice");
var quizArray = [
  { quizSlide: "0",
    question: "Commmonly used data types DO NOT include:",
    options: ["A. strings",
              "B. booleans",
              "C. alerts",
              "D. numbers"],
    correct: "C. alerts"},
  { quizSlide: "1",
    question: "The condition in an if/else statement is enclosed within:",
    options: ["A. quotes",
              "B. curly brackets",
              "C. parentheses",
              "D. square brackets"],
    correct: "C. parentheses"},
  { quizSlide: "2",
    question: "Arrays in JavaScript can be used to store:",
    options: ["A. numbers and strings",
              "B. other arrays",
              "C. booleans",
              "D. all of the above"],
    correct: "D. all of the above"},
  { quizSlide: "4",
    question: "String values must be enclosed within _____ when being assigned to variables.",
    options: ["A. commas",
              "B. curly brackets",
              "C. quotes",
              "D. parentheses"],
    correct: "C. quotes"},
  { quizSlide: "5",
    question: "A useful development and debugging tool for printing content to the debugger is:",
    options: ["A. JavaScript",
              "B. terminal/bash",
              "C. for loops",
              "D. console log"],
    correct: "D. console log"}
  ]
var questionsArray = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed within:", "Arrays in JavaScript can be used to store:", "String values must be enclosed within _____ when being assigned to variables", "A very useful tool used during development and debugging for printing content to the debugger is:"];
var answersArray = [{"A":"A. strings","B":"B. booleans","C":"C. alerts","D":"D. numbers"},{"A":"A. quotes","B":"B. curly brackets","C":"C. parentheses","D":"D. square brackets"},{"A":"A. numbers and strings","B":"B. other arrays","C":"C. booleans","D":"D. all of the above"},{"A":"A. commas","B":"B. curly brackets","C":"C. quotes","D":"D. parentheses"},{"A":"A. JavaScript","B":"B. terminal/bash","C":"C. for loops","D":"D. console log"}];
var userAnswersArr =[];


startButtonEl.addEventListener("click", function() {
  headlineEl.style.visibility = "hidden";
  bylineEl.textContent = "";  startButtonEl.style.display = "none";
   
  bylineEl.textContent = questionsArray[0];
  bylineEl.style.fontSize = "28px";
  multiChoiceListEl.style.display = "block";
  /*
  multiChoiceButtonEl.style.justifyContent = "left";
  */
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

