import React from 'react';
import style from "./finish.module.css";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className={`container ${style.containerCards}`}>
                <h1>Ups..You've clicked yourself into oblivion!</h1>
                <h1>~ 404 ~</h1>
                <div className={style.wrapBtnStart}>
                    <Link to={'/start'}>
                        <button className={style.btnStart}>
                            Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;