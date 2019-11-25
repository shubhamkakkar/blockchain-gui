import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import CardRow, { TCardRow } from "./CardRow"
Enzyme.configure({ adapter: new EnzymeAdapter() });

import findByAttr from "../../utility"


describe('card Row', () => {
    let wrapper: ShallowWrapper;
    let cardRowContainer: any
    let cardRowLabel: any;
    let cardRowValue: any;

    beforeEach(() => {
        const cardRowProps: TCardRow = {
            label: "label",
            value: "value"
        }
        wrapper = shallow(<CardRow  {...cardRowProps} />)
        cardRowContainer = findByAttr(wrapper, "cardRowContainer")
        cardRowValue = findByAttr(wrapper, "cardRowValue")
        cardRowLabel = findByAttr(wrapper, "cardRowLabel")
    })

    test('should cardRowContainer | cardRowValue | cardRowLabel exists', () => {
        expect(wrapper.length).toBe(1)
        expect(cardRowContainer.length).toBe(1)
        expect(cardRowValue.length).toBe(1)
        expect(cardRowLabel.length).toBe(1)
    });

    test('should cardRowContainer has className', () => {
        expect(cardRowContainer.props().className.length).not.toBe(0)
    })
    test('should cardRowLabel have className and text', () => {
        expect(cardRowLabel.props().className.length).not.toBe(0)
        expect(cardRowLabel.text().length).not.toBe(0)
    })



})
