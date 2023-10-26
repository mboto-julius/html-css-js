'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const displayBackgroundColor = function(color){
    document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);

    if(!guess){

        displayMessage('⛔️ No Number!');

    }else if (guess === secretNumber){

        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        displayBackgroundColor('#60b347');
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }else if(guess !== secretNumber){

        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('🥵 You lost the game!');
            displayBackgroundColor('#FF0000');
            document.querySelector('.score').textContent = 0;
        }

    } 
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayBackgroundColor('#222');
    document.querySelector('.number').style.width = '15rem';
});

