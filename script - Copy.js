'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/



let secretnumber = Math.trunc(Math.random() * 20) + 1;
//console.log(num);
//----------------------if we write the  below code(which is commented) here then the secret number shown all the time 
//line no 18 code tand we inly want to show whn the player win so the transfer  code where the player win section--------------------------------------------------------------
//document.querySelector('.number').textContent = secretnumber;
let score = 20;
let highscore = 0;


//-------------------------------------------------------------------------------------
//------querySelector is used to select
//-------------.check,.guess,.value are the class written in the html file
//-------------addEventListener is used to make the butoon clickable......


document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        // console.log(guess, typeof guess);
        //-------------------------------------------------when you didn't put any values--------------------------
        if (!guess) {
            document.querySelector('.message').textContent = '⛔️ No number!';
            // displayMessage('⛔️ No number!');
        }
        //------------------------------------------when the value matched-------------------------------------------------------------
        else if (guess === secretnumber) {
            document.querySelector('.message').textContent = 'You win!';
            document.querySelector('.number').textContent = secretnumber;
            document.querySelector('body').style.background = 'rgb(223, 159, 99)';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        //------------------------------------------when we put the number greater then the guess values-------------------------------
        else if (guess > secretnumber) {
            //-------------------if the no of times not  execeded----------------------
            if (score > 0) {
                document.querySelector('.message').textContent = 'To high';

                score--;
                document.querySelector('.score').textContent = score;
            }
            //----------------when the niumber of time exceded-----------------------
            else {
                document.querySelector('.message').textContent = 'You loose';
            }
        }
        //-----------------------------------------------when we put less then the guess values----------------------------------------
        else if (guess < secretnumber) {
            //-------------------if the no of times not  execeded----------------------
            if (score > 0) {
                document.querySelector('.message').textContent = 'To low';
                score--;
                document.querySelector('.score').textContent = score;
            }
            //----------------when the niumber of time exceded-----------------------
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
