import React from 'react';
import style from './start.module.css';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeName, startGame} from "../actions/gameActions";


const Start = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    let inpName = React.createRef();

    return (
        <div className={'container'}>
            <h1>READY FOR BATTLE{user.nameOwn ? `, ${user.username}?` : ''}</h1>
            <input className={style.inputStart} type="search" id='username' autoComplete="sss" ref={inpName}
                   placeholder={'Enter your name'}/>
            <div>
                <div className={style.wrapBtnStart}>

                    <button className={style.btnStart}
                            onClick={() => {
                                dispatch(startGame())
                                dispatch(changeName(inpName.current.value.trim()));
                                navigate('/game')
                            }}>start
                    </button>
                </div>
            </div>
        </div>
    );

};

export default Start;


