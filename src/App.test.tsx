import React from 'react';
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()})

describe("render app.tsx", () => {
    let wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(() => {
        wrapper = shallow(<App/>)
    });
    it('wrapper must be found', () => {
        expect(wrapper.length).toBe(1)
    });

});

