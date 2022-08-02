var btn = document.querySelector("button");
btn.addEventListener("click", setTimer);

var setScore = document.querySelector("#scoreSpan");//will be used to display score at end
//variables for question cards
var question = document.querySelector("#question");
var op1 = document.querySelector("#op1");
var op2 = document.querySelector("#op2");
var op3 = document.querySelector("#op3");
//var answer = document.querySelector("#answer");//not used
var secondsLeft = 90;
var scorecard = 0;

var timeEl = document.querySelector(".showtime");
var i = 0;//used to loop through array
//array of questions for quiz
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
  document.getElementById("card").style.display = "block";
  //apply css to start button after click
  btn.setAttribute("id", "startClick");
  runCards();//run function to populate quiz card
  //set timer in stylized start button
  var timerInterval = setInterval(function () {
    secondsLeft--;
    btn.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      document.getElementById("card").style.display = "none";
      document.getElementById("saveCard").style.display = "block";
      var saveBtn = document.querySelector("#savebtn");
      saveBtn.addEventListener("click", localSave);

      //set score innerHTML
      setScore.textContent = scorecard;

      btn.textContent = ("game over!");
    }

  }, 1000);
}

function runCards() {
  if (i < questions.length) {
    document.getElementById("question").textContent = questions[i].question;
    op1.textContent = questions[i].op1;
    op2.textContent = questions[i].op2;
    op3.textContent = questions[i].op3;
    op1.addEventListener("click", checkAnswer);
    op2.addEventListener("click", checkAnswer);
    op3.addEventListener("click", checkAnswer);
    //await delay(secondsLeft/.001);//convert Seconds to ms
  } else {
    window.alert("out of questions");
    //document.getElementById("card").style.display = "none";
    secondsLeft = 0;//set timer to zero after all questions answered. 
  }

}

function checkAnswer() {
  if (i < questions.length) {
    if (this.textContent === questions[i].answer) {

      window.alert("Correct!");

      op1.removeEventListener("click", checkAnswer);
      op2.removeEventListener("click", checkAnswer);
      op3.removeEventListener("click", checkAnswer);
      i++;
      scorecard++;
    }
    else if (this.textContent !== questions[i].answer) {

      window.alert("WRONG: " + questions[i].answer);

      op1.removeEventListener("click", checkAnswer);
      op2.removeEventListener("click", checkAnswer);
      op3.removeEventListener("click", checkAnswer);
      secondsLeft--;//remove 1 second for wrong answer. 
      i++

    }
    //i++;
    runCards();
  } else {
    window.alert("out of questions");
    document.getElementById("card").style.display = "none";
  }
}

function localSave(){
  //save local
  //save to ul li element
  //add element to html score board. 

}