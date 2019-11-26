import React from 'react'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { KEYS_TOKEN, keysAndTokenAction, TKeysTokenActionPayload } from '../../actions'
import keysAndToken from '../keysAndToken';

Enzyme.configure({ adapter: new Adapter() });

describe('KeysAndTokenReducer', () => {
    test('should return "" when actionType !== KEYS_TOKEN', () => {
        const newState = keysAndToken("", { type: "WRONG_ACTION_TYPE", payload: "payload" });
        expect(newState).toBe("")
    })
    test('should return updated state when actionType === KEYS_TOKEN', () => {
        const newState = keysAndToken("", { type: KEYS_TOKEN, payload: "payload" });
        expect(newState).not.toBe("")
    })
})

