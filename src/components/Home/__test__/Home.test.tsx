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
    let enhancedWrapper: ShallowWrapper;
    let store: any;
    const homeProps: THome = {
        token: "token",
        history: {
            push: (args: string) => { console.log("route it", args) }
        }
    }
    beforeEach(() => {
        store = mockStore({
            keysAndToken: "token",
        });
        store.dispatch = jest.fn()

        wrapper = shallow(
            <Home  {...{ store, ...homeProps }} />
        )
            .dive() // return HOC
            .dive() // return Component
        // .dive(); // returns component children


        enhancedWrapper = wrapper.dive()
        wrapper.update();
    });

    test('should wrapper render', () => {
        expect(wrapper.length).toBe(1);
        console.log(wrapper.debug())
        console.log(wrapper.props())
    });
    // test('should Heading', () => {
    //     const Heading = findByAtr(enhancedWrapper, "Heading");
    //     expect(Heading.length).toBe(1);
    //     expect(Heading.props().title).toBe("Medical Record Safe - Blockchain");

    // });
    // test('should contain contentContainer', () => {
    //     const contentContainer = findByAtr(enhancedWrapper, "contentContainer");
    //     expect(contentContainer.length).toBe(1);
    //     expect(contentContainer.props().className).toBe("contentContainer");
    // });
    // test('should contain button with token specific click action', () => {
    //     const button = findByAtr(enhancedWrapper, "button");
    //     expect(button.length).toBe(1);
    //     expect(button.simulate("click"))
    //     /**
    //      * if token -> blocks
    //      * else auth
    //      */
    // });

})
