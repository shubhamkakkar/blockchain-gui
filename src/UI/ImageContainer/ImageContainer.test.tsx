import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ImageContainer, { TImageContainer } from './'
Enzyme.configure({ adapter: new EnzymeAdapter() });


import findByAttr from "../../utility"

describe('ImageContainer UI', () => {
    let wrapper: ShallowWrapper;
    let imageContainer: any;
    let image: any;
    beforeEach(() => {
        const imageContainerProps: TImageContainer = {
            src: "string", alt: "string", imageContainerClass: {}, imageClass: {}

        }
        wrapper = shallow(<ImageContainer {...imageContainerProps} />)
        imageContainer = findByAttr(wrapper, "imageContainer")
        image = findByAttr(wrapper, "image")
    });

    it("wrapper, imageContainer, image must be true", () => {
        expect(wrapper.length).toBe(1)
        expect(imageContainer.length).toBe(1)
        expect(image.length).toBe(1)
    });
    it("imageContainer must have the props of src and alt", () => {
        expect(imageContainer.props().className.length).not.toBe(0)
    });
    it("image must have the props of src and alt", () => {
        expect(image.props().src.length).not.toBe(0)
        expect(image.props().alt.length).not.toBe(0)
        expect(image.props().className.length).not.toBe(0)
    });
});
