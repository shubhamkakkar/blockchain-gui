import React from 'react'
import Enzyme, { ShallowWrapper, shallow, mount, ReactWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import AuthScreen, { TAuthScreen } from "../AuthScreen"
import configureStore from 'redux-mock-store';

import findByAttr from "../../../utility";

const mockStore = configureStore([]);
Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('<AuthScreen/>', () => {
    let wrapper: ShallowWrapper;
    let store;
    const authScreenProps: TAuthScreen = {
        setKeysAndToken: jest.fn(),
        history: () => { }
    }
    beforeEach(() => {
        store = mockStore({
            keysAndTokenReducer: "keysAndTokenReducer"
        });
        store.dispatch = jest.fn();
        wrapper = shallow(
            <AuthScreen  {...{ store, ...authScreenProps }} />
        ).dive();
        wrapper.update();
    });
    test('should contain AuthScreenContianer', () => {
        const authScreenContainer = findByAttr(wrapper, "authScreenContainer")
        expect(authScreenContainer.length).toBeTruthy();
    });
    test('should contain ImageContainer and its related props', () => {
        const ImageContainer = findByAttr(wrapper, "ImageContainer")
        expect(ImageContainer.length).toBeTruthy();
    });
    test('should contain Form and its related props', () => {
        const Form = findByAttr(wrapper, "Form")
        expect(Form.length).toBeTruthy();
    });
    test('should container localStorage', () => {
        expect(window.localStorage.getItem("KEYS_TOKEN")).not.toBe("");
        /**
         * if KEYS_TOKEN exist in the localstorage then dispacth redux action - setKeysAndToken
         */
    })

})
