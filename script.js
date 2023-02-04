'use strict';




let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            document.querySelector('.message').textContent = '⛔️ No number!';

        }

        else if (guess === secretnumber) {
            document.querySelector('.message').textContent = 'You win!';
            document.querySelector('.number').textContent = secretnumber;
            document.querySelector('body').style.background = 'rgb(223, 159, 99)';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }

        else if (guess > secretnumber) {

            if (score > 0) {
                document.querySelector('.message').textContent = 'To high';

                score--;
                document.querySelector('.score').textContent = score;
            }

            else {
                document.querySelector('.message').textContent = 'You loose';
            }
        }

        else if (guess < secretnumber) {

            if (score > 0) {
                document.querySelector('.message').textContent = 'To low';
                score--;
                document.querySelector('.score').textContent = score;
            }

            else {
                document.querySelector('.message').textContent = 'You loose the game';
            }
        }
    });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = 'rgb(74, 146, 194)';

});
// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     secretnumber = Math.trunc(Math.random() * 20) + 1;

//     document.querySelector('.message').textContent = 'Start guessing...';
//     //displayMessage('Start guessing...');
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
//     //document.querySelector('body').style.backgroundColor = rgb(110, 189, 199);
//     document.querySelector('body').style.backgroundColor = '#221';
//     //document.querySelector('.number').style.width = '15rem';
// });





//---------------------------------------------------------------------------------------
