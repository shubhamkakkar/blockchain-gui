import React from 'react'
import { configure, shallow, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Home, { THome } from "../Home"
configure({ adapter: new Adapter() });


describe('<Home />', () => {
    let wrapper: ShallowWrapper;
    const homeProps: THome = {
        token: "token",
        history: () => { }
    }
    beforeEach(() => {
        wrapper = shallow(<Home {...homeProps} />)
    });

    test('should wrapper render', () => {
        expect(wrapper.length).toBe(1)
    })

})
