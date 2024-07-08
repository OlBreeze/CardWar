import React from 'react';
import {useNavigate} from "react-router-dom";
import style from './finish.module.css';
import {useDispatch, useSelector} from "react-redux";
import {changeName} from "../actions/gameActions";


const FinishPage = () => {
    const dispatch = useDispatch();
    const result = useSelector(state => state.result);
    const navigate = useNavigate();

    return (
        <div className={`container ${style.containerCards}`}>
            <h1 className={style.h1}>{result.resultGame}</h1>
            <h2>Score: {result.gameScore}</h2>
            <div className={style.wrapBtnStart}>
                <button className={style.btnStart} onClick={() => {
                    dispatch(changeName()); // хочу всегда новое имя, если юзер не ввел
                    navigate('/start')
                }}>
                    Again?
                </button>
            </div>
        </div>
    );
};

export default FinishPage;