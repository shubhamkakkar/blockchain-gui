import {TOKEN} from "../../actions";

export default (state = "", {type, payload}: { type: string, payload: string }) => {
    switch (type) {
        case TOKEN: {
            return payload
        }
        default : {
            return state;
        }
    }
}
