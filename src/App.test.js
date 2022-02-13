import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders learn react link", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find("h2").text()).toBe("Learn React Testing");
  expect(wrapper.find("div.App").exists()).toBe(true);
});
