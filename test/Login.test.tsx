import React from "react";
import SignIn from "../src/pages/signin/page";
import renderer from "react-test-renderer";

it("Test Snapshot", () => {
  const component = renderer.create(<SignIn />);
  let tree = component.toJSON();
  expect(component).toMatchSnapshot();
});
it("changes the class when hovered", () => {
  const component = renderer.create(<SignIn />);
  let tree = component.toJSON();
  expect(component).toMatchSnapshot();
});
