import React from 'react'
import { configure, shallow, ShallowWrapper } from 'enzyme'
import EnzymeAdapter from "enzyme-adapter-react-16";
import findByAttr from "../../../utility";
import CreateBlock from "../CreateBlock";
configure({ adapter: new EnzymeAdapter });


describe('<CreateBlock/>', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<CreateBlock history={() => { }} />)
    });

    test('should wrapper render', () => {
        expect(wrapper.length).toBe(1)
    });
    test('should contain createBlockContainer with className:createBlockContainer', () => {
        const createBlockContainer = findByAttr(wrapper, "createBlockContainer")
        expect(createBlockContainer.length).toBe(1);
        expect(createBlockContainer.props().className).toBe("createBlockContainer");
    });
    test('should contain Heading', () => {
        const Heading = findByAttr(wrapper, "Heading")
        expect(Heading.length).toBe(1);
        expect(Heading.props().title).toBe("Create Block");
    });
    test('should contain animationContainer', () => {
        const animationContainer = findByAttr(wrapper, "animationContainer")
        expect(animationContainer.length).toBe(1);
        expect(animationContainer.props().className).toBe("animationContainer");
    });
    test('should contain ImageContainer', () => {
        const ImageContainer = findByAttr(wrapper, "ImageContainer")
        expect(ImageContainer.length).toBe(1);
    });
    test('should contain CreateBlockForm', () => {
        const CreateBlockForm = findByAttr(wrapper, "CreateBlockForm")
        expect(CreateBlockForm.length).toBe(1);
    })






})
