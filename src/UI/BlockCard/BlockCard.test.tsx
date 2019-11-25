import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import BlockCard, { TBlockCard } from "./"
Enzyme.configure({ adapter: new EnzymeAdapter() });

import findByAttr from "../../utility"

describe('blockCard', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {

        wrapper = shallow(<BlockCard />)
    })
})

