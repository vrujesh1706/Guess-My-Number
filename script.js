'use strict';

// //manipulate the text code using dome
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

console.log(typeof score , typeof highscore);
// document.querySelector('.number').textContent = secretnumber;

const displayMassage = function (massage)
{
    document.querySelector('.message').textContent = massage;
};


document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);
    
    if(!guess)
    {
         // document.querySelector('.message').textContent = 'no number';
        displayMassage('⛔️ no number'); 

    } else if(guess ===  secretnumber ){
        displayMassage('🎉 correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347'; 
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('number').style.width = '30rem';

        // if(score > highscore){
        //     highscore = score;
        //     document.querySelector('.highscore').textContent = highscore ;
        // }
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
      

    }else if(guess !==  secretnumber){
        if(score >1)
        {
            // if(guess > secretnumber)
            // {
            //     document.querySelector('.message').textContent = 'too high';
            // }
            // else{
            //     document.querySelector('.message').textContent = 'too low';
            // }
           displayMassage(guess > secretnumber ? '📈 Too high!' : '📉 Too low!');
            // displayMassage( guess > secretnumber ? 'too high' : 'too low');
            score--;
            document.querySelector('.score').textContent = score; 
        }
        else{
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;  
        }
    }
    
    // else if(guess > secretnumber){
        //     if(score >1)
        //     {
    //         document.querySelector('.message').textContent = 'too high';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'you loose the game';
    //         document.querySelector('.score').textContent = score;  
    //     }
    // }else if(guess < secretnumber){
    //     // document.querySelector('.message').textContent = 'too low';
    //     // score--;
    //     // document.querySelector('.score').textContent = score;
    //     if(score >1)
    //     {
    //         document.querySelector('.message').textContent = 'too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }
    //     else{
        //         document.querySelector('.message').textContent = 'you loose the game';
        //         document.querySelector('.score').textContent = score;  
        //     }
        // }
     } );
    
     
    document.querySelector('.again').addEventListener('click' , function(){
        score = 20;  
        secretnumber = Math.trunc(Math.random()*20) + 1;
        document.querySelector('.message').textContent = 'start guessing...';
    
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
    
    
        document.querySelector('body').style.backgroundColor = '#222'; 
        document.querySelector('.number').style.width = '15rem';
    
    });

