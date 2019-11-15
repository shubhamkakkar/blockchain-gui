import {KEYS, TKeysActionPayload} from "../../actions";

const initialState: TKeysActionPayload = {
    privatekey: "",
    publickey: ""
};

export default (state = initialState, {type, payload}: { type: string, payload: TKeysActionPayload }) => {
    switch (type) {
        case KEYS: {
            return {...state, payload}
        }
        default : {
            return state
        }
    }
};
