# step 1
1. Link to high scores should be in the HTML
1. Timer should be in the HTML as well
1. grab start button element on page using javascript
(this should be in the HTML)
1. when i click on a button (event listener with a type of "click") 
run the code to start the quiz.
1. set the max time on timer
1. in the HTML. there should be a container that i append the questions and answers to.
1. dynamically render the question to the screen
1. dynamically render the answers to the screen. should be buttons right?
becuase you click them. do we want to refresh the page? No(event.preventDefault()).
1. start the timer
1. where do we put our evvent listener when we clock on an answer? event delegation. 
we will add the listener to the parent. the parent is the container than i am appending questions and answers to. from here, we can do that fancy element.match("button") we proabably want to figure out what text or attributes are on that button to start our compare to see if we were right or not. 
1. if correct...show next question
1. if incorrect...decrease time by whatever value you want. Also if time hits zero

