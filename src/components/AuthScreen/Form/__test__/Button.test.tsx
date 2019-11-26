import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button, { TButton, TbuttonsProp } from "../Buttons"

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
    test('should wrapper1 and wrapper2 render properly', () => {
        expect(wrapper1.length).toBe(1)
        expect(wrapper2.length).toBe(1)
    })

})
