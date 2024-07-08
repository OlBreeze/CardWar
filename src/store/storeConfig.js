import {createStore} from "redux";
import {initialState, gameReducer} from "../reducers/gameReducer";

export const store = createStore(gameReducer,initialState);