import {cards} from "./constants";

export const  fillCardDeck = (cardDeck)=>{
    for (const cardItem of cards) {
        for (let i = 0; i < 4; i++) {
            cardDeck.push([cardItem, i]);
        }
    }
}

export const playSound = (sound, elem) =>{
    const audioEl = document.getElementById(elem);
    audioEl.src = sound;
    audioEl.addEventListener('canplaythrough', () => {
        audioEl.play();
    });
}