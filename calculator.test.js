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
