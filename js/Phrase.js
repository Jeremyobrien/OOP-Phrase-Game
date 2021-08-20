/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay(){
        const phraseList = document.querySelector('ul');
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
