/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    startGame(){
        if(this.phrases.phraseSection.children.length > 0) {
            this.phrases.phraseSection.children.forEach(child => phraseSection.unshift(child))
        }
        const keyboardButtons = document.querySelectorAll('.keyrow button');
        if (keyboardButtons.classList.contains('chosen')){
            keyboardButtons.classList.remove('chosen');
            keyboardButtons.classList.add('key');
        } else if (keyboardButtons.classList.contains('wrong')){
            keyboardButtons.classList.remove('wrong');
            keyboardButtons.classList.add('key');
        }
        this.lives.forEach(life => {
            return life.firstElementChild.setAttribute('src', "images/liveHeart.png")
        })
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase;
        this.phrases.addPhraseToDisplay(this.activePhrase);
    }
    get getRandomPhrase(){
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
    handleInteraction(){
        qwerty.addEventListener('click', (e)=>{
            e.target.disabled = true;
            if(e.target.value !== this.phrases.checkLetter){
                e.target.classList.add('wrong');
                removeLife();
            } else {
                e.target.classList.add('chosen');
                this.phrases.showMatchedLetter();
                if(this.checkForWin()){
                    gameOver();
                }
            }
        })
    }
    removeLife(){
        const scoreBoard = document.querySelector('#scoreboard');
        const lives = scoreBoard.children;
        if(!this.phrases.checkLetter){
            const lostHeart = lives.children.find( image => image.src = "images/liveHeart.png" );
            lostHeart.setAttribute('src', 'images/lostHeart.png');
            this.missed ++;
            if(this.missed === 5){
                gameOver();
            }
        }
    }
    checkForWin(){
        this.activePhrase.forEach(letter =>{
            if (!letter.classList.contains('chosen')){
                return false;
            } else {
                return true;
            }
        })
    }
    gameOver(){
       const overlay = document.querySelector('#overlay').style.display = 'block';
       const message = document.querySelector('#game-over-message');
        if(this.checkForWin){
            message.textContent = 'Congratulations, you won!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
        } else {
            this.textContent = 'Game over..Play again?';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }
    }
}

