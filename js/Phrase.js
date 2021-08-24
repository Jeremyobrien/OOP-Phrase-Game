/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay(){
        const phraseList = document.querySelector('#phrase ul');
        const phrase = this.phrase.split('');
        for(let i =0; i < phrase.length; i++){
            const listElement = document.createElement('li');
            if (/[a-z]/.test(phrase[i])) {
                listElement.appendChild(document.createTextNode(phrase[i]));
                listElement.classList.add('hide');
                listElement.classList.add('letter')
                listElement.classList.add(`${phrase[i]}`);
                phraseList.appendChild(listElement);
            } else if (phrase[i] === ' ') {
                listElement.appendChild(document.createTextNode(phrase[i]));
                listElement.classList.add('space')
                phraseList.appendChild(listElement);
            }
        };   
    }
    /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
        checkLetter(letter){
            return this.phrase.includes(letter);
    }

    /**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter){ 
     const matchedLetters = document.getElementsByClassName(letter);
     for (let i = 0; i < matchedLetters.length; i++){
         const matchedLetter = matchedLetters[i];
         matchedLetter.classList.remove('hide');
         matchedLetter.classList.add('show');
        }
                
  }
    
}

