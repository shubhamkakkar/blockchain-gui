import {KEYS_TOKEN, TKeysTokenActionPayload} from "../../actions";


const initialState: TKeysTokenActionPayload = {
    privateKey: "",
    publicKey: "",
    token: ""
};

export default (state = initialState, {type, payload}: { type: string, payload: TKeysTokenActionPayload }) => {
    switch (type) {
        case KEYS_TOKEN: {
            const stringPayload: any = JSON.stringify(payload);
            localStorage.setItem("KEYS_TOKEN", stringPayload);
            return {...state, ...payload}
        }
        default : {
            return state
        }
    }
};
