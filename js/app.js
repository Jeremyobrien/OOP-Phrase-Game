/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const startButton = document.querySelector('#btn__reset');
// startButton.addEventListener('click', ()=>{
//     const newGame = new Game();
//     newGame.startGame();
// });

// qwerty.addEventListener('click', ()=>{
//     if(e.target.classList.contains('key')){
//         this.Game.handleInteraction();
//     }
// })
const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);