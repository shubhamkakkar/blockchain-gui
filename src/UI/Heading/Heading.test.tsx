import React from 'react'

import Enzyme, { shallow, ShallowWrapper } from "enzyme"

import EnzymeAdapter from "enzyme-adapter-react-16";
import Heading, { THeading } from '.';
import { findByAttr } from '../../App.test';

describe('Heading Test', () => {
    let wrapper: ShallowWrapper;
    let headingContainer: any;
    let headingText: any;
    beforeEach(() => {
        const HeadingProps: THeading = {
            title: "Heading Title"
        }
        wrapper = shallow(<Heading {...HeadingProps} />)
        headingContainer = findByAttr(wrapper, "headingContainer");
        headingText = findByAttr(wrapper, "headingText");
    });

    it("wrapper, headingContainer and headingText must be present", () => {
        expect(wrapper.length).toBe(1)
        expect(headingContainer.length).toBe(1)
        expect(headingText.length).toBe(1)
    });
    test('should headingContainer contain className', () => {
        expect(headingContainer.props().className).not.toBe(0)
    })
    test('should headingText container className and text', () => {
        expect(headingText.props().className).not.toBe(0)
        expect(headingText.text().length).not.toBe(0)
    })
})
