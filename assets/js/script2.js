// Get all necessary elements from the DOM
var startButtonEl = document.getElementById("startButton");
var headlineEl = document.getElementById("headline");
var bylineEl = document.getElementById("byline");
var multiChoiceListEl = document.getElementById("multiChoiceList");
var multiChoiceButtonEl = document.getElementsByClassName("multiChoice");
var msgAreaEl = document.getElementById("msgArea");
var timerEl = document.getElementById("timer");
var initialsInputEl = document.getElementById("Name");
var submitButtonEl = document.querySelector("form button");
var startOverButtonEl = document.getElementById("startOverButton");
var clearHighscoresButtonEl = document.getElementById("clearHighscoresButton");
var viewHighscoresEl = document.getElementById("viewHighscores");

// Quiz data
var quizArray = [
  { question: "Commonly used data types DO NOT include:", options: ["strings", "booleans", "alerts", "numbers"], correct: "alerts" },
  { question: "The condition in an if/else statement is enclosed within:", options: ["quotes", "curly brackets", "parentheses", "square brackets"], correct: "parentheses" },
  { question: "Arrays in JavaScript can be used to store:", options: ["numbers and strings", "other arrays", "booleans", "all of the above"], correct: "all of the above" },
  { question: "String values must be enclosed within _____ when being assigned to variables.", options: ["commas", "curly brackets", "quotes", "parentheses"], correct: "quotes" },
  { question: "A useful development and debugging tool for printing content to the debugger is:", options: ["JavaScript", "terminal/bash", "for loops", "console log"], correct: "console log" }
];

var score = 0;
var penalties = 0;
var quizSlide = 0;
var secondsLeft = 75;
var timerInterval;

// Function to start the quiz
function startQuiz() {
  startButtonEl.style.display = "none"; //make start button disappear so that it doesn't create any unwanted bubbling effects
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft + "s";
    if (secondsLeft === 0) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }, 1000);  
}

// Function to display a quiz question
function displayQuestion() {
  if (quizSlide === quizArray.length) {
    endQuiz();
    return;
  } else {  
    bylineEl.textContent = quizArray[quizSlide].question;
    multiChoiceListEl.style.display = "block";
  for (var i = 0; i < 4; i++) {
    multiChoiceButtonEl[i].textContent = quizArray[quizSlide].options[i];
  }
  }

// Function to evaluate the selected answer
function evaluateAnswer(event) {
  event.preventDefault();
  var userChoice = event.target.textContent;
  var correctAnswer = quizArray[quizSlide].correct;

  if (userChoice === correctAnswer) {
    msgAreaEl.textContent = "That is correct! " + correctAnswer + " is the right answer.";
    score += secondsLeft;
  } else {
    msgAreaEl.textContent = "Wrong! The correct answer is " + correctAnswer + ".";
    penalties += 10;
    secondsLeft = Math.max(secondsLeft - 10, 0);
  }

  setTimeout(function () {
    msgAreaEl.textContent = "";
    quizSlide++;
    displayQuestion();
  }, 2000);
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  multiChoiceListEl.style.display = "none";
  bylineEl.textContent = "All done!";
  msgAreaEl.textContent = "Your final score is " + (score - penalties);
  initialsInputEl.style.display = "block";
  submitButtonEl.style.display = "block";
}

// Handle form submission to store initials and score
function handleFormSubmit(event) {
  event.preventDefault();
  var initials = initialsInputEl.value;
  if (initials) {
    // Save initials and score to local storage
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push({ initials: initials, score: score - penalties });
    localStorage.setItem("highscores", JSON.stringify(highscores));
    initialsInputEl.style.display = "none";
    submitButtonEl.style.display = "none";
    viewHighscoresEl.style.display = "block";
  }
}

// Handle viewing highscores
function viewHighscores() {
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.sort((a, b) => b.score - a.score);
  // Create the highscores list
  var highscoresList = document.createElement("ul");
  highscores.forEach(function (entry, index) {
    var listItem = document.createElement("li");
    listItem.textContent = index + 1 + ". " + entry.initials + " - " + entry.score;
    highscoresList.appendChild(listItem);
  });
  highscoresList.id = "highscoresList";
  var highscoresArea = document.getElementById("highscoresArea");
  highscoresArea.innerHTML = "";
  highscoresArea.appendChild(highscoresList);
}

// Clear highscores
function clearHighscores() {
  localStorage.removeItem("highscores");
  var highscoresList = document.getElementById("highscoresList");
  if (highscoresList) {
    highscoresList.innerHTML = "";
  }
}

// Event listeners
startButtonEl.addEventListener("click", startQuiz);
multiChoiceListEl.addEventListener("click", evaluateAnswer);
submitButtonEl.addEventListener("click", handleFormSubmit);
viewHighscoresEl.addEventListener("click", viewHighscores);
clearHighscoresButtonEl.addEventListener("click", clearHighscores);
};