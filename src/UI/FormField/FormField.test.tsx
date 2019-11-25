import React from 'react'

import Enzyme, { shallow, ShallowWrapper } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import FormField, { IFormField } from "./"
import { findByAttr } from '../../App.test';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const propException = ({ wrapper, propname, notToBe }: { wrapper: any, propname: string, notToBe: number | object | string | boolean }) => expect(wrapper.props()[propname]).not.toBe(notToBe)
describe('formField', () => {
    let formFieldContainer: ShallowWrapper;
    let label: any;
    let inputContainer: any;
    let input: any;

    beforeEach(() => {
        const formFieldProps: IFormField = {
            type: "string",
            value: "string",
            label: "string",
            onChange: (e: any, label: string) => { },
            backendLabel: "string",
            labelColor: "string",
        }
        formFieldContainer = shallow(<FormField  {...formFieldProps} />)
        label = findByAttr(formFieldContainer, 'label')
        inputContainer = findByAttr(formFieldContainer, 'inputContainer')
        input = findByAttr(formFieldContainer, 'input')
    })

    test('should formFieldContainer, label, inutContainer, input must be present', () => {
        expect(formFieldContainer.length).not.toBe(0)
        expect(label.length).not.toBe(0)
        expect(inputContainer.length).not.toBe(0)
        expect(input.length).not.toBe(0)
    });
    test('should label container props - className & style and text for label', () => {
        propException({ wrapper: label, propname: "className", notToBe: 0 });
        propException({ wrapper: label, propname: "style", notToBe: {} });
        expect(label.text().length).not.toBe(0)
    });
    test('should inputContainer contains prop of className', () => {
        expect(inputContainer.props().className).not.toBe(0)
    })
    test('should input contains props of className, required, type, value, onChange, style', () => {
        expect(input.props().className).not.toBe(0)
        propException({ wrapper: input, propname: "style", notToBe: {} })
        propException({ wrapper: input, propname: "type", notToBe: 0 })
        propException({ wrapper: input, propname: "className", notToBe: 0 })
        propException({ wrapper: input, propname: "value", notToBe: 0 })
        propException({ wrapper: input, propname: "onChange", notToBe: 0 })
        propException({ wrapper: input, propname: "required", notToBe: false })
    })
})
