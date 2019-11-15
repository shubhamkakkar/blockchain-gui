import {combineReducers} from "redux";
import tokenReducer from "./token"
import keysReducer from "./keys"

const rootReducer = combineReducers({
    tokenReducer,
    keysReducer
});

export default rootReducer;
