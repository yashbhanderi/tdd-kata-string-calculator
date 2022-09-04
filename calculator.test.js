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

test("Alphabets in string test", () => {
    expect(sum("1,2,a,c")).toBe(7);
    expect(sum("c,d,a,b")).toBe(10);
    expect(sum("d")).toBe(4);
    expect(sum("z,10,a,47")).toBe(84);
    expect(sum("y")).toBe(25);
});

test("Negatives not allowed (only one negative)", () => {
    expect(() => {
        sum("45,-45");
    }).toThrow("Negatives not allowed : -45");
    expect(() => {
        sum("-1,5,6,7");
    }).toThrow("Negatives not allowed : -1");
});

test("Negatives not allowed (multiple negatives)", () => {
    expect(() => {
        sum("1, -3, 5, -9, -8, 22, -100");
    }).toThrow("Negatives not allowed : -3,-9,-8,-100");
    expect(() => {
        sum("-67, -50, -16, -70, -80, -324, -102, -9");
    }).toThrow("Negatives not allowed : -67,-50,-16,-70,-80,-324,-102,-9");
});

test("Numbers bigger than 1000 should be ignored", () => {
    expect(sum("1, 1001, 23, 3000, 25")).toBe(49);
    expect(sum("7000, 101, 553, 400, 5, 33333, 29293")).toBe(1059);
});

test("Allow new lines between numbers(instead of commas)", () => {
    expect(sum("2")).toBe(2);
    expect(sum("2\n7,8")).toBe(17);
    expect(sum("97,98\n56,4,1\n20,45\n4")).toBe(325);
});
