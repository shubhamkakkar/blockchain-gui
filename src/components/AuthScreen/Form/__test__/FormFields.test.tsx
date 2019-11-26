import React from 'react'
import { configure, shallow, ShallowWrapper } from 'enzyme'
import Adapter from "enzyme-adapter-react-16";
import FormFields, { TFormFieldsProps } from "../FormFields"
import findByAttr from "../../../../utility"

configure({ adapter: new Adapter() });


describe('<FormFields />', () => {
    let wrapper: ShallowWrapper;
    const formFieldsProps: TFormFieldsProps = {
        loginForm: [
            {
                type: 'string',
                label: 'string'
            }
        ],
        userCredentials: {
            email: "string",
            password: "string",
            confirmPassword: "string",
        },
        setUserCredentials: () => { }
    }
    beforeEach(() => {
        wrapper = shallow(<FormFields  {...formFieldsProps} />)
    });
    test('should render wrapper', () => {
        expect(wrapper.length).toBe(1)
    });
    test('should container formFieldsContainer with className: formFields', () => {
        const formFieldsContainer = findByAttr(wrapper, "formFieldsContainer");
        expect(formFieldsContainer.length).toBe(1);
        expect(formFieldsContainer.props().className).toBe("formFields")
    });
    test('should container FormField, props would be checked in the repective component test', () => {
        const FormField = findByAttr(wrapper, "FormField");
        expect(FormField.length).toBe(1);
    })



})
