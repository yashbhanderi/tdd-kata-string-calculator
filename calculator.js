// return array of numbers
const getNumbers = (str) => {
    if (str === "") return [];

    const pattern = ",";

    return str
        .split(pattern)
        .filter((n) => n !== "")
        .map((n) => {
            if (/['a-z']/.exec(n)) return n.charCodeAt(0) - 96;
            else return parseInt(n);
        });
};

// return sum of numbers in the array
const calculateSum = (arr) => {
    let sum = 0;
    arr.forEach((num) => {
        sum += num;
    });
    return sum;
};

// return addition of numbers in the given string
const add = (str) => {
    arr = getNumbers(str);
    sum = calculateSum(arr);
    return sum;
};

module.exports = add;
