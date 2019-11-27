import React from 'react'
import { configure, shallow, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import configureStore from 'redux-mock-store';
import Home, { THome } from "../Home"
import findByAtr from "../../../utility"
configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

describe('<Home />', () => {
    let wrapper: ShallowWrapper;
    let store: any;
    const homeProps: THome = {
        token: "token",
        history: () => { }
    }
    beforeEach(() => {
        store = mockStore({
            keysAndTokenReducer: "keysAndTokenReducer"
        });
        store.dispatch = jest.fn();
        wrapper = shallow(
            <Home  {...{ store, ...homeProps }} />
        ).dive();
        wrapper.update();
    });

    test('should wrapper render', () => {
        expect(wrapper.length).toBe(1)
    });
    test('should Heading', () => {

    });
    test('should contain contentContainer', () => {

    });
    test('should contain button with token specific click action', () => {

    })
})
