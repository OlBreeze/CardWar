import {arrayNames} from "../utils/constants";
import {CHANGE_RESULT, CHANGE_USER, PLAY_GAME_NEXT, START_GAME} from "../actions/gameActions";
import {fillCardDeck, playSound} from "../utils/usefulFunctions";
import clickSoundWin from "../sounds/win.mp3";
import clickSoundLose from "../sounds/lose.mp3";

export const initialState = {
    step: {cardCPU: [0, 0], cardUser: [0, 0]},
    user: {nameOwn: false, username : arrayNames[Math.floor(Math.random() * arrayNames.length)]},
    result: {resultGame: '', gameScore: '0-0'},
    stateGame: {cardDeck: [], winsCPU : 0, winsUser : 0}
}

export const gameReducer = (state, action) => {

    switch (action.type) {
        case START_GAME:
            const startState = {...state};
            startState.stateGame = {cardDeck: [], winsCPU : 0, winsUser : 0};
            startState.result = {resultGame: '', gameScore: '0-0'};
            fillCardDeck(startState.stateGame.cardDeck);

            return startState;

        case CHANGE_RESULT:

            return {...state, result: action.payload}

        case CHANGE_USER:

            let {user} = {...state};
            if (action.payload && action.payload !== user.username) {
                user = {nameOwn: true, username: action.payload}}
            else if (!user.nameOwn)
                user = {nameOwn: false, username: arrayNames[Math.floor(Math.random() * arrayNames.length)]}

            return {...state, user}

        case PLAY_GAME_NEXT:

            // убрали карту цпу
            let cardDeck = state.stateGame.cardDeck;
            const randomIndexCPU = Math.floor(Math.random() * cardDeck.length);
            const cardCPU_t = cardDeck[randomIndexCPU];
            cardDeck = cardDeck.filter((item, index) => index !== randomIndexCPU);

            // убрали карту пользователя
            const randomIndexUser = Math.floor(Math.random() * cardDeck.length);
            const cardUser_t = cardDeck[randomIndexUser];
            cardDeck = cardDeck.filter((item, index) => index !== randomIndexUser);

            /// --- sound - + -
            if (cardCPU_t[0] < cardUser_t[0])
                playSound(clickSoundWin, 'audioWin');
            else if (cardCPU_t[0] > cardUser_t[0])
                playSound(clickSoundLose, 'audioLose');
            /// --- sound - - -

            return {...state,
                stateGame: {cardDeck: cardDeck,
                            winsCPU : (cardCPU_t[0] > cardUser_t[0])? (state.stateGame.winsCPU+1): state.stateGame.winsCPU,
                            winsUser : (cardCPU_t[0] < cardUser_t[0])?(state.stateGame.winsUser+1): state.stateGame.winsUser},
                step: {cardCPU : cardCPU_t, cardUser : cardUser_t}};

        default:
            return state;
    }
}