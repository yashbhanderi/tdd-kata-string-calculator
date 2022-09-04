const sum = require("./calculator.js");

test("Empty string test", () => {
    expect(sum("")).toBe(0);
});
