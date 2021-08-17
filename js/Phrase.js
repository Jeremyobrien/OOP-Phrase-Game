/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay(){
        const phraseSection =  document.querySelector("#phrase");
        let space = document.createElement('li');
        const phrase = this.phrase.split('');
        phrase.map(letter => space = letter);
        phraseSection.push(phrase);
        console.log(phraseSection);
    }
    checkLetter(){
        const qwerty =  document.querySelector('#qwerty');
        qwerty.addEventListener('click', (e)=>{
           const matches = this.phrase.filter(letter => letter === e.target.value ? true : false);
           return matches;
        })
    }
    showMatchedLetter(){
        matches.forEach(match => match.style.display.hide = false); 
    }
    
}
