import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";


import App, { routes } from "./App";
Enzyme.configure({ adapter: new EnzymeAdapter() });

import findByAttr from "./utility"

describe("render app.tsx", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("wrapper must be found", () => {
    expect(wrapper.length).toBe(1);
  });
  it("RouterContainer have children", () => {
    const RouterContainer = findByAttr(wrapper, "RouterContainer")
    expect(RouterContainer).toHaveLength(1);
  });
  it("SwitchContainer have children", () => {
    const SwitchContainer = findByAttr(wrapper, "SwitchContainer")
    expect(SwitchContainer).toHaveLength(1);
  });
  it("Route have children", () => {
    const Route = findByAttr(wrapper, "Route")
    expect(Route).toHaveLength(routes.length);
  });
});
