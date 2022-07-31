var btn = document.querySelector("button");
btn.addEventListener("click",setTimer);
var secondsLeft = 15;
var timeEl = document.querySelector(".showtime");
var questions = [];//json objects for all 4 buttons and questions in array. 


function setTimer() {
//unhide card element when start button clicked
//test commit
    var timerInterval = setInterval(function() {
      secondsLeft--;
      btn.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);

        btn.textContent = ("game over!");
      }
  
    }, 1000);
  }
