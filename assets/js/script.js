//Grab all the HTML elements I will need to access and store them in global variables 
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

//Arrange my quiz as an array of objects, one object for each slide. The options property will 
//store its value as a four-item array of multiple choice answers
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

//Global variables declared to help with the timer and scoring functionalities and to access the current quizSlide  
var score = 0;
var penalties = 0;
var quizSlide = 0;
var secondsLeft = 75;
var timerInterval;



//FUNCTION INIT --------------------------------------------------------------------
// called by a click on the Go Back button from the highscores screen. Resets everything to same appearance as landing page so quiz is ready to run again.
function init () {
  // Set the text content of bylineEl to what was originally coded in the HTML to appear on the landing page
  bylineEl.textContent = "Try to answer the following code-related questions within the time limit. For each incorrect answer you will lose 10 seconds on the timer.";
    
  // Display the start button and hide all the other elements which come into use on the other pages
  startButtonEl.style.display = "block";
  initialsInputEl.value = "";
  buttonContainerEl.style.display = "none";
  msgAreaEl.textContent = "";
  msgAreaEl.style.display = "none";
  highscoresListEl.style.display = "none";

  // Set these values to what they were initially so that when the quiz is re-run it begins on first slide, with score 
  // at 0 and the full allowance of 75s on the clock
  quizSlide = 0;
  score = 0;
  secondsLeft = 75;
};



//FUNCTION CLEARHIGHSCORES ------------------------------------------------------------
// called by a click on the Clear Highscores button from the highscores screen. Clears items out of localStorage memory and returns all previous dynamically 
// generated list item elements to an empty string 
function clearHighscores() {
  localStorage.removeItem("highscores");
  if (highscoresListEl) {
    highscoresListEl.innerHTML = "";
  }
}



//FUNCTION VIEWHIGHSCORES --------------------------------------------------------------
// called either from the handleFormSubmit function or from a click on the viewHighscores button.  If the former it is passed a flag as a param. Tthe conditional logic 
// inside the function deals with the case of it having no flag (ie. shouldCongratulate being undefined). This function is responsible for dynamically generating the 
// high scores list items, which content it retrieves from localStorage.
function viewHighscores(shouldCongratulate) {

  // In case this function gets called when there is content from a previous rendering of the highscores List, the function begins by clearing this out.
  // Timer value is also erased, and start button and form from landing page and all done page respectively are vanished to create a clean quizArea mat for the dynamic
  // generation of the highscores list
  highscoresListEl.innerHTML = "";
  timerEl.textContent = "";
  timerEl.textContent = "Timer: ";
  startButtonEl.style.display = "none";
  formEl.style.display = "none";
  
  var highscores = JSON.parse(localStorage.getItem("highscores")) || []; //Retrieve highscores from local storage or the empty array if they have only just been initialized

  // Iterate through the highscores array and assign a variable so each entry of the iteration can be dealt with separately. Create each entry of the highscores list, style & append
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

  // See if the flag is present. If not this whole block of code will be ignored. If shouldCongratulate is present and is true, push the congratulatory msg to the msgAreaEl. 
  // Otherwise (ie. if present and false), push the sorry msg as textContent to the msgAreaEl)
    if (shouldCongratulate !== undefined) {
      if (shouldCongratulate) {
        msgAreaEl.textContent = "Congratulations! Your score is among the top 10 highscores.";
      } else {
        msgAreaEl.textContent = "Sorry, your most recently entered score was not high enough to appear among our top 10.";
      }
    }
  // Display the startOverButton (this is the code name for the button whose text appears as "Go Back" on the screen) and clearHighscoresButton
  buttonContainerEl.style.display = "inline";
}



//FUNCTION HANDLEFORMSUBMIT ----------------------------------------------------------------
// This function is called from a click on the submit button from the all done screen. It takes the newEntry (initials: score) from the last round of the quiz and adds them
// to the highscores array. (First the array has to be retrieved from localStorage in order to be manipulated). The manipulations: newEntry is pushed in (array may now contain
// 11 elements if it was already full before the newEntry was added). Array is sorted and sliced so it loses the lowest score entry if there are 11. Array is iterated through, 
// looking for match with newEntry so value of shouldCongratulate flag can be determined (this will eventually control the message sent to the msgArea element on the next screen).
// The array is then set back into local storage and the quizAreaMat cleared out of all the elements from this screen preparatory to the highscores list being rendered on the next 
function handleFormSubmit(event) {
  event.preventDefault();
  var initials = initialsInputEl.value;
  if (initials) {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || []; // Get high scores from localStorage or initialize as an empty array
    console.log(highscores);

    var newEntry = { // Create a new score entry
      initials: initials,
      score: score - penalties
    };

    highscores.push(newEntry); // Add the new score entry to the array
    console.log(highscores);

    highscores.sort(function (a, b) { // Sort high scores by score in descending order
      return b.score - a.score;
    });

    console.log(highscores);

    highscores = highscores.slice(0, 10); // If more than 10 items, this ensures the 11th will be sliced off)

    var shouldCongratulate = false; // Flag is created to pass to viewHighscores function (controls message that will be written).  Initialized to default value of false.

    for (var i = 0; i < highscores.length; i++) { // Iterate through the highscores array and create a variable so each entry can be considered separately
    var entry = highscores[i];
    if (entry.initials === newEntry.initials && entry.score === newEntry.score) { // Check for a match between the newEntry and the each entry that is being iterated through
      shouldCongratulate = true; // Set to true if a matching entry is found
    break; // Break the loop once match is found
  }
}
    localStorage.setItem("highscores", JSON.stringify(highscores)); // Save manipulated highscores array back to localStorage

    // Hide the byline, msgArea and form elements. A clean quizAreaMat is wanted for the rendering of the highscores list in the next function
    bylineEl.style.display = "none";
    msgAreaEl.style.display = "none";
    formEl.style.display = "none";

    // Call the viewHighscores function and pass it the flag
    viewHighscores(shouldCongratulate);
  }
}



//FUNCTION ENDQUIZ ----------------------------------------------------------
// This function stops the timer and swaps the visual elements of the quiz slide screen for those of the All done screen. It calculates the final score, 
//renders it to the screen and presents the formEl (containing the label, input box and submit button).  The function is called from the startQuiz function
// if the timer reaches zero, from the displayQuestion function if that function finds it has no more question slides to display, or from the valuateAnswer
// function if either the timer has reached zero, or the quiz slides have reached their end.
function endQuiz() {
  clearInterval(timerInterval);
  multiChoiceListEl.style.display = "none";
  bylineEl.textContent = "All done!";
  bylineEl.setAttribute("style", "margin-top: 50px; font-size: 30px"); 
  msgAreaEl.textContent = "Your final score is " + (score - penalties);
  formEl.style.display = 'block';
}



//FUNCTION EVALUATEANSWER -----------------------------------------------------
// This function is called from a click on one of the multiChoice answer buttons from a quiz slide screen. The userChoice is captured and compared with the correct
// answer with conditional logic to control what happens in the case of a correct or an incorrect answer.  
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



//FUNCTION DISPLAYQUESTION ----------------------------------------------------------
// This function is called from the startQuiz function or from the evaluateAnswer function. It will call endQuiz immediately if it finds that the last quiz slide has
// been reached. Otherwise it will replace the content rendered on the screen for the former quiz slide with the content for the new quiz slide. 
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

//FUNCTION STARTQUIZ -------------------------------------------------------------------
// This function is called from a click on the start button from the landing page. It vanishes the start button, starts the timer and moves the program along by either 
// calling endQuiz if timer has been allowed to run out to zero, or by displaying the first quiz slide
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

// Event listeners.  With six clickable areas on the screen that will trigger events, it is important to vanish each of these elements after their purpose is served. 
// Otherwise unwanted propagation may happen.
startButtonEl.addEventListener("click", startQuiz);
multiChoiceListEl.addEventListener("click", evaluateAnswer);
submitButtonEl.addEventListener("click", handleFormSubmit);
viewHighscoresEl.addEventListener("click", viewHighscores);
startOverButtonEl.addEventListener("click", init);
clearHighscoresButtonEl.addEventListener("click", clearHighscores);
