import React from 'react'
import { Provider } from "react-redux"
import Enzyme, { ShallowWrapper, shallow, mount, ReactWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import AuthScreen, { TAuthScreen } from "../AuthScreen"
import configureStore from 'redux-mock-store';
import { keysAndTokenAction } from "../../../store/actions"
import wait from 'waait';
import ImageContainer from '../../../UI/ImageContainer';



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
            <Provider {...{ store }}>
                <AuthScreen {...authScreenProps} />
            </Provider>
        );
        wrapper.update();
    });
    test('should AuthScreen', () => {
        const authScreenContainer = wrapper.find(
            <ImageContainer
                imageContainerClass={{}}
                imageClass={{}}
                alt={"Authentication Image"}
                src={"https://cdn.dribbble.com/users/103909/screenshots/6010724/services-icon-preview-02.png"}
            />
        );
        console.log(authScreenContainer.debug())
    });
})
