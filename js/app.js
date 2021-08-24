/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startButton = document.querySelector('#btn__reset');
let game = {};
const phraseList = document.querySelector('#phrase ul');
const lives = document.querySelectorAll('.tries img');
const mainContainer = document.querySelector('.main-container');
startButton.addEventListener('click', ()=>{
    phraseList.innerHTML = '';
    for(let i = 0; i < keys.length; i++){
        keys[i].disabled = false;
        if(keys[i].classList.contains('chosen')){
            keys[i].classList.replace('chosen', 'key');
        } else if (keys[i].classList.contains('wrong')){
            keys[i].classList.replace('wrong', 'key');
        }
    }
    for(let i = 0; i < lives.length; i++){
        lives[i].setAttribute('src', 'images/liveHeart.png')
    }
    mainContainer.firstElementChild.classList.remove('win', 'lose');
    mainContainer.firstElementChild.classList.add('start');
    game = new Game();
    game.startGame();
});

const qwerty = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.keyrow .key');
qwerty.addEventListener('click', (e)=>{
    for(let i = 0; i < keys.length; i++){
        if(e.target === keys[i]){
            game.handleInteraction(keys[i]);
        }
    }   
})
