import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Start from "./components/Start";
import Game from "./components/Game";
import FinishPage from "./components/FinishPage";
import ErrorPage from "./components/ErrorPage";

const App = () => {

    return (
            <div className="App">
                    <Routes>
                        <Route path={'/'} element={<Start/>}>
                            <Route path={'start'} element={<Start/>}></Route>
                            <Route path={'cardwar'} element={<Start/>}></Route>
                        </Route>
                        <Route path={'/game'}   element={<Game/>} />
                        <Route path={'/finish'} element={<FinishPage/>}/>
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
            </div>
    );
}

export default App;

