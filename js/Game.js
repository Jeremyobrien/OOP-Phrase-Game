/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
    }
    /**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame(){
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase.addPhraseToDisplay();
        // if(this.phrases.phraseSection.children.length > 0) {
        //     this.phrases.phraseSection.children.forEach(child => phraseSection.unshift(child))
        // }
        // const keyboardButtons = document.querySelectorAll('.keyrow button');
        // if (keyboardButtons.classList.contains('chosen')){
        //     keyboardButtons.classList.remove('chosen');
        //     keyboardButtons.classList.add('key');
        // } else if (keyboardButtons.classList.contains('wrong')){
        //     keyboardButtons.classList.remove('wrong');
        //     keyboardButtons.classList.add('key');
        // }
        // this.lives.forEach(life => {
        //     return life.firstElementChild.setAttribute('src', "images/liveHeart.png")
        // })
        
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
            
            const salutations = ['Hello', 'Greetings', 'Goodbye', 'Adios', 'Peace'];
            const people = ['Officer', 'Journeyman', 'Professor', 'Doctor', 'Brother'];
            const aPhrase = new Phrase(`${salutations[i]} ${people[i]}`);
            this.phrases.push(aPhrase);
        }
       return this.phrases;
    }
    handleInteraction(button){
        button.disabled = true;
            if(!this.activePhrase.checkLetter(button.textContent)){
                button.classList.add('wrong');
                this.removeLife();
            } else {
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(button.textContent);
                if(this.checkForWin()){
                    this.gameOver();
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
            this.gameOver();
            }
        }

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
    gameOver(){
       const overlay = document.querySelector('#overlay').style.display = 'block';
       const message = document.querySelector('#game-over-message');
        if(this.checkForWin){
            message.textContent = 'Congratulations, you won!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
        } else {
           message.textContent = 'Game over..Play again?';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }
    }
}
