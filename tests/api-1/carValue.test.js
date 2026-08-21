//const carValue = require("./carValue");
import carValue from "./carValue.js";

test("Civic from 2014 should have a value of 6614", () => {
  expect(carValue("Civic", 2014)).toBe(6614);
});

test("car model is required", () => {
  expect(() => carValue(undefined, 2014)).toThrow("Model is required");
});

test("car year is required", () => {
  expect(() => carValue("Civic", undefined)).toThrow("Year is required");
});

test("car model must be a string", () => {
  expect(() => carValue(123, 2014)).toThrow("Model must be a string");
});

test("car year must be a number", () => {
  expect(() => carValue("Civic", "2014")).toThrow("Year must be a number");
});
test("symbols in model are ignored", () => {
  expect(carValue("Civ!ic", 2014)).toBe(6614);
});