var startButtonEl = document.getElementById("startButton");
var headlineEl = document.getElementById("headline");
var bylineEl = document.getElementById("byline");
var multiChoiceListEl = document.getElementById("multiChoiceList");
var multiChoiceButtonEl = document.getElementsByClassName("multiChoice");
var msgAreaEl = document.getElementById("msgArea");
var timerEl = document.getElementById("timer");
var formEl = document.getElementById("form");
var initialsInputEl = document.querySelector("form input");
var submitButtonEl = document.querySelector("form button");
var highscoresListEl = document.getElementById("highscoresList");
var buttonContainerEl = document.getElementById("buttonContainer");
var startOverButtonEl = document.getElementById("startOverButton");
var clearHighscoresButtonEl = document.getElementById("clearHighscoresButton");
var viewHighscoresEl = document.getElementById("viewHighscores");

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
    question: "String values must be enclosed within these when being assigned to variables:",
    options: ["commas","curly brackets","quotes","parentheses"],
    correct: "quotes"},
  { quizSlide: "4",
    question: "A useful development and debugging tool for printing content to the debugger is:",
    options: ["JavaScript","terminal/bash","for loops","console log"],
    correct: "console log"}
  ];

var score = 0;
var penalties = 0;
var quizSlide = 0;
var secondsLeft = 75;
var timerInterval;

function init () {
  // Set the text content of bylineEl
  bylineEl.textContent = "Try to answer the following code-related questions within the time limit. For each incorrect answer you will lose 10 seconds on the timer.";
    
  // Display the start button and hide other elements
  startButtonEl.style.display = "block";
  initialsInputEl.value = "";
  buttonContainerEl.style.display = "none";
  msgAreaEl.textContent = "";
  msgAreaEl.style.display = "none";
  highscoresListEl.style.display = "none";
  quizSlide = 0;
  score = 0;
  secondsLeft = 75;
};

// Clear highscores
function clearHighscores() {
  localStorage.removeItem("highscores");
  if (highscoresListEl) {
    highscoresListEl.innerHTML = "";
  }
}

function viewHighscores(shouldCongratulate) {

  highscoresListEl.innerHTML = "";
  timerEl.textContent = "";
  timerEl.textContent = "Timer: ";
  startButtonEl.style.display = "none";
  formEl.style.display = "none";
  
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  for (var i = 0; i < highscores.length; i++) {
    var entry = highscores[i];

    var listItem = document.createElement("li");
    listItem.textContent = (i + 1) + ". " + entry.initials + " - " + entry.score;

    highscoresListEl.appendChild(listItem);
    highscoresListEl.style.display = "block";
  }
    // Display the byline and msgArea Els and set their text and styling
    bylineEl.style.display = "block";
    bylineEl.textContent = "Highscores";
    bylineEl.style.marginTop = "15px";
    msgAreaEl.style.display = "block"; 
    msgAreaEl.style.marginTop = "0";

    if (shouldCongratulate !== undefined) {
      if (shouldCongratulate) {
        msgAreaEl.textContent = "Congratulations! Your score is among the top 10 highscores.";
      } else {
        msgAreaEl.textContent = "Sorry, your most recently entered score was not high enough to appear among our top 10.";
      }
    }
  // Display the startOverButton and clearHighscoresButton
  buttonContainerEl.style.display = "inline";
}

function handleFormSubmit(event) {
  event.preventDefault();
  var initials = initialsInputEl.value;
  if (initials) {
    // Get high scores from localStorage or initialize as an empty array
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    console.log(highscores);

    // Create a new score entry
    var newEntry = {
      initials: initials,
      score: score - penalties
    };

    // Add the new score entry to the array
    highscores.push(newEntry);
    console.log(highscores);

    // Sort high scores by score in descending order
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });

    console.log(highscores);

    // Ensure only the top 10 scores are kept
    highscores = highscores.slice(0, 10);

    var shouldCongratulate = false; // Default to false

    for (var i = 0; i < highscores.length; i++) {
    var entry = highscores[i];
  
    if (entry.initials === newEntry.initials && entry.score === newEntry.score) {
      shouldCongratulate = true; // Set to true if a matching entry is found
    break; // No need to continue searching once a match is found
  }
}
    // Save manipulated highscores array back to localStorage
    localStorage.setItem("highscores", JSON.stringify(highscores));

    // Hide the byline, msgArea and form elements
    bylineEl.style.display = "none";
    msgAreaEl.style.display = "none";
    formEl.style.display = "none";

    // Call the viewHighscores function with a flag
    viewHighscores(shouldCongratulate);
  }
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  multiChoiceListEl.style.display = "none";
  bylineEl.textContent = "All done!";
  bylineEl.setAttribute("style", "margin-top: 50px; font-size: 30px"); 
  msgAreaEl.textContent = "Your final score is " + (score - penalties);
  formEl.style.display = 'block';
}

function evaluateAnswer(event) {
  event.preventDefault();
  var userChoice = event.target.textContent;
  var correctAnswer = quizArray[quizSlide].correct;
  msgAreaEl.style.display = "block";
  msgAreaEl.style.marginTop = "60px";

  // In the case of a correct answer the program will render "Right!" message to the 
  // screen, and will update score to the value of seconds left.  Then the  program
  // will check if the quiz has reached its last slide. If true, it will call the 
  // endQuiz function, but if the quiz has not yet reached its last slide it will 
  // increment the slide and display the next question 
  if (userChoice === correctAnswer) {
    msgAreaEl.textContent = "Right! The correct answer is " + correctAnswer + ".";
    score += secondsLeft;

    if (quizSlide === quizArray.length - 1) {
      endQuiz();
      setTimeout(function () {
        msgAreaEl.textContent = "";
        endQuiz();
      }, 2000); 
    } else {
      setTimeout(function () {
        msgAreaEl.textContent = "";
        quizSlide++;
        displayQuestion();
      }, 2000);  
    }

  // In the case of a wrong answer the program will render "Wrong!" message to the 
  // screen, and will update penalties by adding 10. secondsLeft will be updated to 
  // a value less 10 from its value before. Then the program will check if the quiz
  // has reached its last slide, OR if the secondsLeft value has reached zero. If 
  // either is true, it will call the endQuiz function, else it will increment the 
  // slide and display the next question. 
  } else {
    
    msgAreaEl.textContent = "Wrong! The correct answer is " + correctAnswer + ".";
    penalties += 10;
    secondsLeft = Math.max(secondsLeft - 10, 0);

    if (quizSlide === quizArray.length - 1 || secondsLeft === 0) {
      setTimeout(function () {
        msgAreaEl.textContent = "";
        endQuiz();
      }, 2000); 
    } else {
      setTimeout(function () {
        msgAreaEl.textContent = "";
        quizSlide++;
        displayQuestion();
      }, 2000);
    }
  }  
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
}}

// Function to start the quiz
function startQuiz() {
  startButtonEl.style.display = "none"; //vanish the start button so it doesn't create unwanted bubbling effects
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

// Event listeners
startButtonEl.addEventListener("click", startQuiz);
multiChoiceListEl.addEventListener("click", evaluateAnswer);
submitButtonEl.addEventListener("click", handleFormSubmit);
viewHighscoresEl.addEventListener("click", viewHighscores);
startOverButtonEl.addEventListener("click", init);
clearHighscoresButtonEl.addEventListener("click", clearHighscores);
