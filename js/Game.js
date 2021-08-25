/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Game class constructor and methods
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame(){    
        document.querySelector('#overlay').style.display = 'none';
        const gamePhrase =  this.getRandomPhrase();
        gamePhrase.addPhraseToDisplay();
        this.activePhrase = gamePhrase;     
    }
    /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhrases(){
        this.phrases = [];
        for (let i = 0; i < 5; i++){
            const salutations = ['Hello', 'Greetings', 'Farewell', 'Seeya', 'Peace'];
            const people = ['Officer', 'Sir', 'Professor', 'Doc', 'Brother'];
            const aPhrase = new Phrase(`${salutations[i]} ${people[i]}`);
            this.phrases.push(aPhrase);
        }
       return this.phrases;
    }
    /**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(button){
        button.disabled = true;
            if(!this.activePhrase.checkLetter(button.textContent)){
                button.classList.add('wrong');
                this.removeLife();
            } else {
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(button.textContent);
                if(this.checkForWin()){
                    this.gameOver(true);
                }
            }
        }
    
     /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/   
    removeLife(){
        const life = document.querySelector('ol img[src="images/liveHeart.png"]');
        life.setAttribute('src', 'images/lostHeart.png');
        this.missed ++;
        if(this.missed === 5){
            this.gameOver(false);
            }
        }
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin(){
           const letters = document.querySelector('#phrase ul').children;
           let guessedLetters = 0;
            for(let i = 0; i < letters.length; i++){
                if (letters[i].classList.contains('hide')){
                    return false;
                } else if (letters[i].classList.contains('space') || letters[i].classList.contains('show')){
                    guessedLetters++;
                }
            }
            if (guessedLetters === letters.length){
                return true;
            }
    }
    /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon){
        const mainContainer = document.querySelector('.main-container');
        const message = document.querySelector('#game-over-message');
        document.querySelector('#overlay').style.display = 'block';
        if(gameWon === true){
                message.textContent = 'Congratulations, you won!';
                mainContainer.firstElementChild.classList.replace('start', 'win');
            } else if (gameWon === false) {
                message.textContent = 'Game over..Play again?';
                mainContainer.firstElementChild.classList.replace('start', 'lose');
            }
    }
}
