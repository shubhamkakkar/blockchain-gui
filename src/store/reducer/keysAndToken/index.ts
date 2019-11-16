import {KEYS_TOKEN, TKeysTokenActionPayload} from "../../actions";

const initialState: TKeysTokenActionPayload = {
    privateKey: "",
    publicKey: "",
    token: ""
};

export default (state = initialState, {type, payload}: { type: string, payload: TKeysTokenActionPayload }) => {
    switch (type) {
        case KEYS_TOKEN: {
            return {...state, ...payload}
        }
        default : {
            return state
        }
    }
};
