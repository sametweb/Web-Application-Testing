import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./components/Dashboard";
import App, { addStrike, addBall, addFoul, addHit } from "./App";

test("dashboard renders 4 action buttons", () => {
  const dashboard = rtl.render(<Dashboard />);
  const buttons = dashboard.getAllByTestId("btn");

  expect(buttons.length).toBe(4);
});

test("display renders balls and strikes labels", () => {
  const display = rtl.render(<App />);
  const balls = display.queryByText(/balls/i);
  const strikes = display.queryByText(/strikes/i);
  const game = display.queryByText(/game will start soon/i);

  expect(balls).toBeInTheDocument();
  expect(strikes).toBeInTheDocument();
  expect(game).toBeInTheDocument();
});

//addStrike
test("addStrike adds 1", () => {
  const result = addStrike(1);

  expect(result.strike).toBe(2);
});

test("addStrike resets strike and ball if the strikes reach 3", () => {
  const result = addStrike(2);

  expect(result.strike).toBe(0);
  expect(result.ball).toBe(0);
});

//addBall
test("addBall adds 1", () => {
  const result = addBall(1);

  expect(result.ball).toBe(2);
});

test("addBall resets strike and ball if the balls reach 4", () => {
  const result = addBall(3);

  expect(result.strike).toBe(0);
  expect(result.ball).toBe(0);
});

//addFoul
test("addFoul increases strike by 1", () => {
  const result = addFoul(0);

  expect(result.strike).toBe(1);
});

test("addFoul does not increment if there are 2 strikes already", () => {
  const result = addFoul(2);

  expect(result.strike).toBe(2);
});

//addHit
test("addHit resets strikes and balls", () => {
  const result = addHit();

  expect(result.strike).toBe(0);
  expect(result.ball).toBe(0);
});
