import React from 'react';
import {useNavigate} from "react-router-dom";
import {images} from "../utils/constants";
import clickSoundWin from '../sounds/win.mp3';
import clickSoundLose from '../sounds/lose.mp3';
import style from './game.module.css';
import {useDispatch, useSelector} from "react-redux";
import {changeResult, playGameNext} from "../actions/gameActions";

const Game = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user      = useSelector(state => state.user);
    const step      = useSelector(state => state.step);
    const stateGame = useSelector(state => state.stateGame);

    let { cardDeck, winsCPU, winsUser } = stateGame;

    const imageCPU = images[`card_${step.cardCPU[0]}_${step.cardCPU[1]}`];
    const imgCPU = <img src={imageCPU} alt="card" className={style.imgClass}/>;

    const imageUser = images[`card_${step.cardUser[0]}_${step.cardUser[1]}`];
    const imgUser = <img src={imageUser} alt="card" className={style.imgClass}/>;


    return (
        <div className={'container'}>
            <div className={style.containerCards}>
                <div>
                    <h2>Computer: {winsCPU}</h2>
                    {imgCPU}
                </div>
                <div>
                    <h2>{user.username}: {winsUser}</h2>
                    {imgUser}
                </div>
            </div>

            <div className={style.wrapBtnStart}>
                    <button className={style.btnStart} onClick={() => {
                        if (cardDeck.length === 0) {
                            const result = (winsCPU < winsUser) ? 'You WON!' : (winsCPU > winsUser) ? 'You Lose' : 'Draw';
                            dispatch(changeResult({resultGame: result, gameScore: `${winsCPU} - ${winsUser}`} ));
                            navigate('/finish');
                        } else {
                            dispatch(playGameNext());
                        }
                    }}>Next
                    </button>


            </div>
            <audio id="audioWin" src={clickSoundWin}></audio>
            <audio id="audioLose" src={clickSoundLose}></audio>

        </div>
    );

};

export default Game;
