import React from "react"
import { ShallowWrapper, ReactWrapper } from 'enzyme'
export default (wrapper: ShallowWrapper | ReactWrapper, value: string) =>
    wrapper.find(`[data-test="${value}"]`)
