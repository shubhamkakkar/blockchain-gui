import { KEYS_TOKEN } from "../../actions";

export type TReducer = { type: string, payload: string }

export default (state = "", { type, payload }: TReducer) => {
    switch (type) {
        case KEYS_TOKEN: {
            localStorage.setItem(KEYS_TOKEN, payload)
            return payload
        }
        default: {
            return state
        }
    }
};
