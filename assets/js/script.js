var btn = document.querySelector("button");
btn.addEventListener("click", setTimer);
var question = document.querySelector("#question");
var op1 = document.querySelector("#op1");
var op2 = document.querySelector("#op2");
var op3 = document.querySelector("#op3");
var answer = document.querySelector("#answer");
var secondsLeft = 60;

// const delay = async (ms = 1000) =>
//   new Promise(resolve => setTimeout(resolve, ms));
var timeEl = document.querySelector(".showtime");
var i = 0;
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
  runCards();
  var timerInterval = setInterval(function () {
    secondsLeft--;
    btn.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

      document.getElementById("card").style.display = "none";

      btn.textContent = ("game over!");
    }

  }, 1000);
}

const  runCards=() =>{

    document.getElementById("question").textContent = questions[i].question;
    op1.textContent = questions[i].op1;
    op2.textContent = questions[i].op2;
    op3.textContent = questions[i].op3;
    op1.addEventListener("click",function(){checkAnswer(op1.innerHTML)});
    op2.addEventListener("click",function(){checkAnswer(op2.innerHTML)});
    op3.addEventListener("click",function(){checkAnswer(op3.innerHTML)});
    //await delay(secondsLeft/.001);//convert Seconds to ms
    
}

function checkAnswer(input){
if (input===questions[i].answer && i < questions.length){

  window.alert("Correct!");

  op1.removeEventListener("click",function(){checkAnswer(op1.innerHTML)});
  op2.removeEventListener("click",function(){checkAnswer(op2.innerHTML)});
  op3.removeEventListener("click",function(){checkAnswer(op3.innerHTML)});
  i++;

}
else if (input!==questions[i].answer && i < questions.length){

  window.alert("WRONG: "+questions[i].answer);

  op1.removeEventListener("click",function(){checkAnswer(op1.innerHTML)});
  op2.removeEventListener("click",function(){checkAnswer(op2.innerHTML)});
  op3.removeEventListener("click",function(){checkAnswer(op3.innerHTML)});
  i++

}
else{
  window.alert("out of questions");
  document.getElementById("card").style.display = "none";
}
//i++;
setTimeout(runCards(),0);
}