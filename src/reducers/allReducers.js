import LogginReducer from "./log";
import counterReducer from "./counter";
import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        counter : counterReducer ,
        loggin : LogginReducer
    }
)

export default reducers