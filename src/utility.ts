import React from "react"
import { ShallowWrapper } from 'enzyme'
export default (wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>, value: string) =>
    wrapper.find(`[data-test="${value}"]`)
