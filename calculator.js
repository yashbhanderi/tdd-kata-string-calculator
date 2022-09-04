// return array of numbers
const getNumbers = (str) => {
    if (str === "") return [];

    return str
        .split(/(,|\n)/)   // comma or new line ignored
        .filter((n) => n !== "")
        .map((n) => {
            if (/['a-z']/.exec(n)) return n.charCodeAt(0) - 96;  // if n is an alphabet
            else return parseInt(n);
        });
};

// return sum of numbers in the array
const calculateSum = (arr) => {
    let sum = 0,
        negatives = [];

    arr.forEach((num) => {
        if (num < 0) {
            negatives.push(num);
        } else if (num <= 1000) sum += num;
    });

    if (negatives.length > 0) {
        throw new Error("Negatives not allowed : " + negatives.join(","));
    }
    return sum;
};

// return addition of numbers in the given string
const add = (str) => {
    arr = getNumbers(str);
    sum = calculateSum(arr);
    return sum;
};

module.exports = add;
