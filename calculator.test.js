const sum = require("./calculator.js");

test("Empty string test", () => {
    expect(sum("")).toBe(0);
});

test("Comma, One digit string test", () => {
    expect(sum("1")).toBe(1);
    expect(sum("8")).toBe(8);
    expect(sum("2,7")).toBe(9);
    expect(sum("97,98")).toBe(195);
});

test("Unknown amount of numbers string test", () => {
    expect(sum("2,7,3,1,6,8,43,2,3")).toBe(75);
    expect(sum("10,332,23,134,500,1,1,33,444")).toBe(1478);
});
