// return array of numbers
const getNumbers = (str) => {
    if (str === "") return [];
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
