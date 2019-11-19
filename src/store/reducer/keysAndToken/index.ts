import {KEYS_TOKEN} from "../../actions";

export default (state = "", {type, payload}: { type: string, payload: string }) => {
    switch (type) {
        case KEYS_TOKEN: {
            localStorage.setItem(KEYS_TOKEN, payload)
            return payload
        }
        default : {
            return state
        }
    }
};
