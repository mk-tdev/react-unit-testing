/* eslint-disable testing-library/await-async-query */
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import ClickCounter from "./click-counter";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<ClickCounter />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test("renders Click Counter", () => {
  const wrapper = setup();
  expect(wrapper.find('[data-test="component-click-counter"]').exists()).toBe(
    true
  );
  expect(wrapper.exists()).toBe(true);
});

test("renders increment button display", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "counter-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterNumber = findByTestAttr(wrapper, "counter-number");
  expect(counterNumber.length).toBe(1);
});

test("renders counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count");

  expect(count.text()).toBe("0");
});

test("clicking button increments the counter display", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "counter-button");
  button.simulate("click");
  const count = findByTestAttr(wrapper, "count");

  expect(count.text()).toBe("1");
});

test("should not go below zero and show error", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "counter-dec-button");
  button.simulate("click");
  const count = findByTestAttr(wrapper, "count");
  const error = findByTestAttr(wrapper, "error");

  expect(count.text()).toBe("0");
  expect(error.length).toBe(1);
});
