const { sum } = require("./sum");

test("sum outputs a sum of two values", () => {
  const [valueA, valueB] = [2, 3];
  const expectedOutput = sum(valueA, valueB);
  expect(expectedOutput).toEqual(valueA * valueB);
});

test("sum outputs NaN if you provide strings", () => {
    const [valueA, valueB] = ["a", "b"];
    const expectedOutput = sum(valueA, valueB);
    expect(expectedOutput).toBe(NaN);
})
