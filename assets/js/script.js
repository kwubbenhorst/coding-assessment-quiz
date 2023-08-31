//This file contains all the course code from the individual lessons in module 4
//INS 1 Window Object 
// Logs window object using this
console.log("this: ");
console.log(this);

// Logs the document object
console.log("window.document: ");
console.log(window.document);

// Logs body of document
console.log("document.body: ");
console.log( document.body);

//STU 2 Window Object
// Logs window object
console.log(window);

// Logs reference to the document in the window object
console.log(window.document);

// Logs root element of document.
console.log(document.documentElement);

// Returns head element of current document
console.log(document.head);

//INS 3 Traverse DOM
console.log("Document Body: ")
console.log(document.body);

console.log("Children of Document Body: ")
console.log(document.body.children);

console.log("First child of body: ")
console.log(document.body.children[0]);

console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);

// Accessing element by id
var firstChildUl = document.getElementById("first-child-ul")
console.log(firstChildUl);

// Setting style of element
firstChildUl.style.color = "green";

//STU 4 Traverse DOM
// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';

//INS 5 Setting Attributes
// Access multiple elements using .querySelectorAll()
 var divTags = document.querySelectorAll("div");
 var pTags = document.querySelectorAll("p");
 var imgEl = document.querySelectorAll("img");

// Access element by ID using .querySelector()
 var changeP = document.querySelector("#change2");

// Sets first pTags to have a font-size of 40px
 pTags[0].setAttribute("style", "font-size: 40px;");

// Sets changeP to have multiple style attributes
 changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

 // Sets image source of the first image
 imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// Adds size and width styling to image
 imgEl[0].setAttribute("style", "width:50%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "color:blue; font-size: 30px");
 }

//STU 6 Setting Attributes 
var sitesEl = document.querySelector(".sites");
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");
// Store all h4 elements in a variable
var siteTitles = document.querySelectorAll("h4");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Loop through all h4 elements to add styling 
for (var i = 0; i < siteTitles.length; i++) {
  siteTitles[i].setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");
}

//INS 7 Create Append
// Stores user response in variable
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    document.body.appendChild(secondTag);
  }
}

//STU 8: Create Append:
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
// Add text for list items
li1.textContent = "Apples 🍎 ";
li2.textContent = "Pizza 🍕 ";
li3.textContent = "Dumplings 🥟 ";
li4.textContent = "Cupcakes 🧁 ";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
// Add styling to list element
listEl.setAttribute("style", "background:#333333; padding:20px;");
// Add styling to list items
li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");

//INS 9: Timers Intervals
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();

//STU 10 Timers Intervals
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();

//INS 11 Event Listener
// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});

//STU 12 Event Listener
var count = 0;
//  Select increment and decrement button elements
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// Updates count on page
function setCounterText() {
  countEl.textContent = count;
}
// Attach event listener to increment button element
incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
});

// Attach event listener to decrement button element
decrementEl.addEventListener("click", function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});

// INS 13 Preventing Default
//Declaration of variables
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
submitEl.addEventListener("click", showResponse);

//STU 14 Preventing Default
var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  // Prevent default action
  event.preventDefault();
  // Store tip and total calculations in variables
  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  // Update HTML with tip and total
  document.querySelector("#tip-amount").textContent = tipAmount;
  // Use toFixed() to limit to two decimal places
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}

// Add listener to submit element
submitEl.addEventListener("click", addTip);

//INS 15 Keyboard Events
// declaration of global variables var typefaceEl = document.querySelector('#typeface');
var clearEl = document.querySelector('#clear');
var h1El = document.querySelector('#h1');
var h2El = document.querySelector('#h2');
var h3El = document.querySelector('#h3');
var pEl = document.querySelector('#p');
var textAreaEl = document.querySelector('#textarea');

var elements = [h1El, h2El, h3El, pEl];

var typeface;

// Change event
typefaceEl.addEventListener('change', function (event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector('.container').style.fontFamily = typeface;
});

// Keydown event
textAreaEl.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

clearEl.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});

//STU 16 Keyboard Events
function keydownAction(event) {
    // The key property holds the value of the key press
    var keyPress = event.key;
    // The code property holds the key's code 
    var keyCode = event.code;
    // Updates content on page
    document.querySelector("#key").textContent = keyPress;
    document.querySelector("#code").textContent = keyCode;
    document.querySelector("#status").textContent = "KEYDOWN Event";
  }
  
  function keyupAction() {
    // Updates event to KEYUP Event when key is released
    document.querySelector("#status").innerHTML = "KEYUP Event";
  }
  // Adds listener for keydown event
  document.addEventListener("keydown", keydownAction);
  // Adds listener for keyup event
  document.addEventListener("keyup", keyupAction);

  //INS 17 Event Bubbling
  var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");

function changeBlue(event) {
  //event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue"
  );
}

function changePurple(event) {
  //event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: #601A4A"
  );
}

function changeOrange(event) {
  //event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: #EE442F; color: white;"
  );
}

outer.addEventListener("click", changePurple);
inner.addEventListener("click", changeOrange);
button.addEventListener("click", changeBlue);

//STU 18 Event Bubbling
//  Selects carousel element
var carousel = document.querySelector(".carouselbox");

// Selects buttons using their parent carousel element
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// Clicking on image opens a new window containing the image
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// Clicking on next button displays next image in carousel
next.addEventListener("click", function(event) {
  // Stops event from bubbling up and new window opening
  event.stopPropagation();

  navigate(1);
});

// Clicking previous displays previous image in carousel
prev.addEventListener("click", function(event) {
  // Event bubbling would occur and a new window would open if we did not include the following line of code.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);

//This is the js for module 4 stu 18 (the pictures in the carousel)

//INS 19 Data Attributes
var imageContainer = document.querySelector(".img-container");

// Listen for any clicks within the img-container div
imageContainer.addEventListener("click", function(event) {
  var element = event.target;

  // Check if the clicked element was an image
  if (element.matches("img")) {
    // Get the current value of the image's data-state attribute
    var state = element.getAttribute("data-state");

    if (state === "still") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "animate";
      element.setAttribute("data-state", "animate");

      // Update the image's source to the string being stored in 
      //the data-animate attribute
      element.setAttribute("src", element.dataset.animate);
    } else {
      // Change the attributes back to their non-animated values
      element.dataset.state = "still";
      element.setAttribute("src", element.dataset.still);
    }
  }
});

//STU 20 Data Attributes
var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  
  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      element.textContent = element.dataset.number;
      element.dataset.state = "visible";
   
    } else {
     
      element.textContent= "";
      element.setAttribute("data-state", "hidden")
     
    }  
  }
  
});

//INS 21 Local Storage
var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");

counter.textContent = count;

addButton.addEventListener("click", function() {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

//STU 22 Local Storage
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  if (!email || !password) {
    return;
  }

  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = emailInput.value;
  var password = passwordInput.value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    renderLastRegistered();
  }
});

//INS 23 Local Storage Objects
var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

var studentGrade = {
  student: student.value,
  grade: grade.value,
  comment: comment.value.trim()
};

localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
renderMessage();

});

function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}

//STU 24 Local Storage Objects
var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  
});

//INS 25 Local Storage and Function Init
var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");

function saveLastGrade() {
  // Save related form data as an object
  var studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim(),
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('studentGrade', JSON.stringify(studentGrade));
}

function renderLastGrade() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastGrade = JSON.parse(localStorage.getItem('studentGrade'));
  // Check if data is returned, if not exit out of the function
  if (lastGrade !== null) {
    document.getElementById('saved-name').innerHTML = lastGrade.student;
    document.getElementById('saved-grade').innerHTML = lastGrade.grade;
    document.getElementById('saved-comment').innerHTML = lastGrade.comment;
  }
}

saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  saveLastGrade();
  renderLastGrade();
});

// The init() function fires when the page is loaded
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastGrade();
}
init();

//STU 26 Local Storage Todos
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// The following function renders items in a todo list as <li> elements
function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // This is a helper function that will render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add submit event to form
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// Add click event to todoList element
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});

// Calls init to retrieve data and render it to the page on load
init()

