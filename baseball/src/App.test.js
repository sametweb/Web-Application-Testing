import { addStrike, addBall, addFoul, addHit } from "./App";

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
