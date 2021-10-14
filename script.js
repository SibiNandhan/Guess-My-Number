// 'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number🎉';
// document.querySelector('.score').textContent = 30;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.score').textContent);

const winNumber = Math.ceil(Math.random() * 20);
let score = 10;
console.log(winNumber);
let highscore = localStorage.getItem('highscore');
document.querySelector('.highscore').textContent = highscore;

const displayText = function (className, text) {
  document.querySelector(className).textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;

  if (!guess) {
    // document.querySelector('.message').textContent = '❌❌ No Number';
    displayText('.message', 'No Number');
  } else {
    if (guess == winNumber) {
      //document.querySelector('.message').textContent = 'Congratulations';
      displayText('.message', 'Congratulations🎈🎈');

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (highscore < score) {
        document.querySelector('.highscore').textContent =
          document.querySelector('.score').textContent;
        highscore = score;
      }
      document.querySelector('.number').textContent = winNumber;
      displayText('.number', winNumber);
    } else {
      // let score = document.querySelector('.score').textContent;
      if (score >= 1) {
        console.log(score);
        document.querySelector('.score').textContent = score - 1;
        score--;
        if (guess > winNumber) {
          //document.querySelector('.message').textContent = 'Too High ';
          displayText('.message', 'Too High');
        } else {
          //document.querySelector('.message').textContent = 'Too Less';
          displayText('.message', 'Too Less');
        }
      } else {
        //document.querySelector('.message').textContent = 'You Lost';
        displayText('.message', 'You Lost');
        score = 0;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  localStorage.setItem('highscore', highscore);

  location.reload();
});
