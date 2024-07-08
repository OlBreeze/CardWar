export const START_GAME     = "startGame";
export const PLAY_GAME_NEXT = "nextGame";
export const CHANGE_USER    = "c_user";
export const CHANGE_RESULT  = "c_result";

export const startGame = () => {
    return {
        type: START_GAME
    };
}

export const playGameNext = () => {
    return {
        type: PLAY_GAME_NEXT
    };
};

export const changeName = name => ({
    type: CHANGE_USER,
    payload: name
})

export const changeResult = res => ({
    type:CHANGE_RESULT,
    payload: res
})
