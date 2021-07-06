import React from "react";
import Counter from "../Counter";
import { fireEvent, render } from "@testing-library/react";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

describe("Testing the Counter Compoment", () => {
  it("checks if header is rendered", () => {
    const header = getByTestId("header");
    expect(header.textContent).toBe("COUNTER");
  });

  it("starts the counter with zero(0)", () => {
    const counter = getByTestId("counter");
    expect(counter.textContent).toBe("0");
  });

  it("starts the counter step with one(1) and has className 'step'", () => {
    const step = getByTestId("step");
    expect(step.className).toBe("step");
    expect(step.value).toBe("1");
  });

  it("up counter button renders with text + and has className 'btn'", () => {
    const addBtn = getByTestId("add-btn");
    expect(addBtn.className).toBe("btn");
    expect(addBtn.textContent).toBe("+");
  });

  it("downcounter counter button renders with text - and has classname btn", () => {
    const subBtn = getByTestId("sub-btn");
    expect(subBtn.className).toBe("btn");
    expect(subBtn.textContent).toBe("-");
  });

  it("should work fine when step value is changed", () => {
    const step = getByTestId("step");
    fireEvent.change(step, {
      target: {
        value: "5",
      },
    });
    expect(step.value).toBe("5");
  });

  it("should add value to counter when + button is clicked", () => {
    const addBtn = getByTestId("add-btn");
    const counter = getByTestId("counter");
    expect(counter.textContent).toBe("0");
    fireEvent.click(addBtn);
    expect(counter.textContent).toBe("1");
  });

  it("should subtract value from counter when - button is clicked", () => {
    const subBtn = getByTestId("sub-btn");
    const counter = getByTestId("counter");
    expect(counter.textContent).toBe("0");
    fireEvent.click(subBtn);
    expect(counter.textContent).toBe("-1");
  });

  it("should add value to counter when step value is altered and + button is clicked", () => {
    const step = getByTestId("step");
    const counter = getByTestId("counter");
    const addBtn = getByTestId("add-btn");

    expect(counter.textContent).toBe("0");
    fireEvent.change(step, {
      target: {
        value: "5",
      },
    });
    fireEvent.click(addBtn);
    expect(counter.textContent).toBe("5");
  });

  it("should subtract value from counter when step value is altered and - button is clicked", () => {
    const step = getByTestId("step");
    const counter = getByTestId("counter");
    const subBtn = getByTestId("sub-btn");

    expect(counter.textContent).toBe("0");
    fireEvent.change(step, {
      target: {
        value: "5",
      },
    });
    fireEvent.click(subBtn);
    expect(counter.textContent).toBe("-5");
  });

  it("should show the counter in green above 100 and red below 100", () => {
    const step = getByTestId("step");
    const counter = getByTestId("counter");
    const addBtn = getByTestId("add-btn");
    const subBtn = getByTestId("sub-btn");

    expect(counter.textContent).toBe("0");
    expect(counter.className).toBe("");

    fireEvent.change(step, {
      target: {
        value: "70",
      },
    });

    fireEvent.click(addBtn);
    expect(counter.className).toBe("");
    expect(counter.textContent).toBe("70");

    fireEvent.click(addBtn);
    expect(counter.className).toBe("green");
    expect(counter.textContent).toBe("140");

    fireEvent.click(subBtn);
    expect(counter.className).toBe("");
    expect(counter.textContent).toBe("70");

    fireEvent.click(subBtn);
    fireEvent.click(subBtn);
    fireEvent.click(subBtn);
    expect(counter.className).toBe("red");
    expect(counter.textContent).toBe("-140");
  });
});
