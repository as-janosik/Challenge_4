var btn = document.querySelector("button");
btn.addEventListener("click", setTimer);
var secondsLeft = 15;
var timeEl = document.querySelector(".showtime");
var questions = [
  {
    question: "What is an array?",
    op1: "An array is a special number, which can hold more than one value",
    op2: "An array is a special variable, which can hold more than one value",
    op3: "An array is a special character, which can hold more than one value",
    answer: "An array is a special variable, which can hold more than one value"
  },
  {
    question: "what is a string?",
    op1: "A string is zero or more numbers written inside astrisks",
    op2: "A string is zero or more characters written inside pipe delimiters",
    op3: "A string is zero or more characters written inside quotes",
    answer: "A string is zero or more characters written inside quotes"
  },
  {
    question: "What is the range for Math.floor(Math.random() * 10);",
    op1: "Returns a random integer from 0 to 9",
    op2: "Returns a random decimal from 0 to 11",
    op3: "Returns a random integer from 0 to 10",
    answer: "Returns a random integer from 0 to 9"
  },
  {
    question: "What value represents a boolean?",
    op1: "greater-than and less-than",
    op2: "X and Y",
    op3: "true and false",
    answer: "true and false"
  },
  {
    question: "How would you make a comment in a css file?",
    op1: "//",
    op2: "<!---->",
    op3: "/**/",
    answer: "/**/"
  }
];//json objects for all 3 buttons and questions in array. 


function setTimer() {
  //unhide card element when start button clicked
  //test commit
  //test commit new email
  var thiscode = ("please use new email... :(");
  var timerInterval = setInterval(function () {
    secondsLeft--;
    btn.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

      btn.textContent = ("game over!");
    }

  }, 1000);
}
