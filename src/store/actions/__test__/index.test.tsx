import React from 'react'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { KEYS_TOKEN, keysAndTokenAction, TKeysTokenActionPayload } from ".."

Enzyme.configure({ adapter: new Adapter() })

describe('actions test', () => {
    const keysAndTokenPayload: TKeysTokenActionPayload = {
        publicKey: "string",
        privateKey: "string",
        token: "string"
    }
    test('should keysAndTokenAction return an action of type KEYS_TOKEN', () => {
        const keysAndTokenActionTest = keysAndTokenAction(keysAndTokenPayload);
        expect(keysAndTokenActionTest).toEqual({
            type: KEYS_TOKEN,
            payload: keysAndTokenPayload
        })
    })

})
