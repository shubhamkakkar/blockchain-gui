import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button, { TButton, TbuttonsProp } from "../Buttons"
import findByAttr from "../../../../utility"
Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
    let wrapper1: ShallowWrapper;
    const buttonProps1: TbuttonsProp = {
        isLogin: false,
        buttonActions: ({ title }: { title: string }) => console.log({ title })
    }
    let wrapper2: ShallowWrapper;
    const buttonProps2: TbuttonsProp = {
        isLogin: true,
        buttonActions: ({ title }: { title: string }) => console.log({ title })
    }
    beforeEach(() => {
        wrapper1 = shallow(<Button {...buttonProps1} />)
        wrapper2 = shallow(<Button {...buttonProps2} />)
    });


    describe('common to wrapper1 and wrapper2', () => {
        test('should ButtonsChildContainer', () => {
            const ButtonsChildContainer1 = findByAttr(wrapper1, "ButtonsChildContainer");
            const ButtonsChildContainer2 = findByAttr(wrapper2, "ButtonsChildContainer");
            expect(ButtonsChildContainer1.length).not.toBe(0);
            expect(ButtonsChildContainer1.props().className).toBe("btnContainer");
            expect(ButtonsChildContainer2.length).not.toBe(0);
            expect(ButtonsChildContainer2.props().className).toBe("btnContainer");
        })

        test('should render buttonMapsContainer', () => {
            const buttonMapsContainer1 = findByAttr(wrapper1, "buttonMapsContainer");
            const buttonMapsContainer2 = findByAttr(wrapper2, "buttonMapsContainer");
            expect(buttonMapsContainer1.length).not.toBe(0);
            expect(buttonMapsContainer2.length).not.toBe(0);
        })

        test('should buttonMapsContainer contain 2 buttons', () => {
            const button1 = findByAttr(wrapper1, "Button")
            const button2 = findByAttr(wrapper2, "Button");
            expect(button1.length).toBe(2)
            expect(button2.length).toBe(2)
        });

        test('should button container props of onClick, title and className', () => {
            const button1 = findByAttr(wrapper1, "Button")
            expect(button1.first().props().className).toBe("signin")
            expect(button1.last().props().className).toBe("login")

            const button2 = findByAttr(wrapper2, "Button")
            expect(button2.first().props().className).toBe("login")
            expect(button2.last().props().className).toBe("signin")

        })


    })


    describe('wrapper1', () => {
        test('should wrapper1 properly', () => {
            expect(wrapper1.length).toBe(1)
        });



    });

    describe('wrapper2', () => {
        test('should wrapper2 render properly', () => {
            expect(wrapper2.length).toBe(1)
        });


    });
});
