// return array of numbers
const getNumbers = (str) => {
    if (str === "") return [];

    if (str.indexOf("*") == 0) {
        str = str.substring(1, str.length);
    }

    var odd = 0,
        even = 0;
    if (str.indexOf("0//") == 0 || str.indexOf("1//") == 0) {
        if (str[0] == "0") odd = 1;
        else even = 1;
        str = str.substr(3);
    }

    var regex = "\n|,"; // comma or new line ignored

    if (str.indexOf("//") == 0) {
        var s = str.substring(2, str.indexOf("\n"));
        for (i = 0; i < s.length; i++) {
            regex += "|" + s[i]; // add all delimiters in regex before \n
        }
    }

    var pattern = new RegExp(regex, "g");

    return str
        .split(pattern)
        .filter((n) => n !== "")
        .filter((n) => n !== ",")
        .map((n, i) => {
            if (/['a-z']/.exec(n)) return n.charCodeAt(0) - 96; // if n is an alphabet
            else {
                if (odd) {
                    return (i + 1) % 2 != 0 ? parseInt(n) : undefined;
                }
                if (even) {
                    return (i + 1) % 2 == 0 ? parseInt(n) : undefined;
                }
                return parseInt(n);
            }
        });
};

// return sum of numbers in the array
const calculateSum = (arr, sign) => {
    let sum = 0,
        negatives = [];

    if (sign == "*") {
        let total = 1;
        arr.forEach((num) => {
            if (num) total *= num;
        });

        return total;
    }

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
    var sum;
    if (str[0] == "*") {
        sum = calculateSum(arr, "*");
    } else sum = calculateSum(arr, "+");
    return sum;
};

module.exports = add;
