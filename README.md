# coding-assessment-quiz
A timed multiple choice quiz, of the kind interviewers often present to job-candidates, which assesses coding knowledge and saves scores

## Description:
Multiple choice coding assessment quizzes are frequently part of the technical interview given by tech companies to prospective job candidates. This web application administers such a quiz, commenced when the user clicks on the "Start" button from the landing page. The quiz consists of five questions, each with 4 possible answer options displayed on clickable buttons. The quiz is timed. Each wrong answer takes 10 seconds off the clock and results in a scoring penalty. Right and wrong answers are signalled to the user as the quiz is in progress, and include an indication of what the correct answer was. The quiz ends when all five questions have been answered or when the timer reaches zero. The user is then presented with the opportunity to input their initials, which will be saved together with their score. They can then see whether their score was good enough to appear on the leaderboard of top 10 saved quiz scores. These saved high scores will be remembered so long as the user keeps logging in on the same device, but they can also be cleared by the user at any time with a click on the "Clear Highscores" button from the highscores screen. The leaderboard can also be viewed at any time by the user clicking on the "View Highscores" link. The user is not limited to one run-through of the application. If they want to try to improve their score they can take the quiz again by clicking the "Go Back" button from the highscores screen. This will reset the application to the landing page. 

In designing this application there were a number of challenges. The possibility to run through the quiz after taking it the first time required diligent attention to resetting all fields, scores and component visibility, otherwise slides did not get presented in the right order, resulting in early termination of the quiz, scores were miscalculated, new entries to the highscores list caused the list to render scores 1-4 twice for instance and components kept popping up in unwanted places. The application has four distinct pages which means that components created for one page have to hide or get reworked when the next page is displayed. When the program is run multiple times, scrupulous attention must be paid to reusable pieces of code to make sure that the components are set properly at the point where they are called into action. 

Besides this challenge with debugging the finished program, there were challenging parts of the program design process as well. The part of the program that deals with the evaluation of the user's answer and with the manipulation of the collection of highscores after the user's most recent score has been added were particularly complex. There is a feature in the program which maxes out the collection of highscores at 10 and evaluates whether the user's most recent highscore makes this list of 10. There was a fair bit of programming involved in giving the program this feature and many things were learned!

Although the client in this case did not require either a "pretty" user interface or this subtle functionality around highscores I did deliver these extras in the final product. My HTML document is built from scratch with some upgraded layout features and I paired it with a custom CSS stylesheet, also coded from scratch, which is responsible for the (I think) attractive look and feel of the application. The quiz questions were hardcoded in the HTML (though their text content was being continually updated), but the items in the highscores list were dynamically generated.  

In future it would be good to expand the quiz content so it has more than 5 questions. This would be fairly easy to do since the quiz is represented in a single array of objects, one object for each quiz slide. If the quiz were given content enough for 10 or 20 questions and still only five were selected, at random, for presentation to the user, it would make the quiz more challenging on multiple run-throughs.

## Installation:
N/A

## Usage:
This application is deployed to the world wide web and ready to use in any browser.  Please visit: https://kwubbenhhorst.github.io/coding-assessment-quiz. The following screenshots will illustrate the journey the user will take through the flow of the program:

Landing Page. This is the appearance of the application upon page load or after the Go Back button has been clicked from the highscores screen.
![Screen Shot 1](https://github.com/kwubbenhorst/coding-assessment-quiz/assets/140316693/31f89e37-0bec-4078-afed-fc23961a55ee)

Quiz Slide presenting the user with the question and their four multiple choice options. Note that the timer now has a value showing.
![Screen Shot 2](https://github.com/kwubbenhorst/coding-assessment-quiz/assets/140316693/0f05101c-81a5-463b-b9e3-ee91de6a5ab3)

Quiz Slide after an answer has been clicked upon. Shows the message area notifying the user that the question has been answered correctly. This message displays for 2 seconds before the next quiz slide is presented.
![Screen Shot 3](https://github.com/kwubbenhorst/coding-assessment-quiz/assets/140316693/0de570a4-c122-461b-9bb1-fce7a977c175)

This All Done! page displays the user's final score and invites them to enter their initials in the input box. Upon clicking submit, the next highscores screen will be displayed.  The timer still has a value on the All Done! screen but it is static at whatever value it had when the quiz finished.
![Screen Shot 4 ](https://github.com/kwubbenhorst/coding-assessment-quiz/assets/140316693/642729ce-05b9-42c2-be16-4dbd7c681f0d)

This highscores screen was captured before the quiz we have been following was taken. Note that the leaderboard is full with 10 entries and the lowest score is 126. 
![Screen Shot 5](https://github.com/kwubbenhorst/coding-assessment-quiz/assets/140316693/e4c8a2f9-97b3-448b-8eda-d8d350d1d01c)

When the new score of 235 is entered from the quiz we have been following note that it is displayed among the highscores at position number 6 and previous low score of 126 is eliminated. Note also that on the highscores screen the Timer value has been cleared.
![Screen Shot 6](https://github.com/kwubbenhorst/coding-assessment-quiz/assets/140316693/ed990c7c-dff6-4ffa-a71d-6fdd6922f1f0)

This final slide shows a single entry on the highscores leaderboard. The "clear highscores" button has been hit, a new quiz has been taken and its score entered, and now that is the only entry appearing on the leaderboard.
![Screen Shot 7](https://github.com/kwubbenhorst/coding-assessment-quiz/assets/140316693/79529343-9c64-45c2-a8de-b7fef75151bf)

## Credits:
This application was authored by Karla Wubbenhorst. The background image of the circuitboard was found at https://depositphotos.com/photos/circuit-board.html, and the redketchup color picker (https://redketchup.io/color-picker) was used to the create colour variables to match the colours in the image. StackOverflow was helpful in the construction of the quizArray and how to access various property-values in a complex array of objects with nested arrays. https://code.mu/en/javascript/book/prime/loops/flags/ was helpful in understanding how to pass "flags" into functions. https://www.freecodecamp.org/news/how-to-sort-javascript-array-accurately/#:~:text=The%20sort()%20method%20of,comparing%20their%20Unicode%20code%20points was helpful in teaching me how to sort an array, and https://www.w3schools.com/jsref/jsref_slice_array.asp and https://www.w3schools.com/jsref/jsref_max.asp helped me understand the slice and Math.max methods.

## License:
Licensed under the MIT license









