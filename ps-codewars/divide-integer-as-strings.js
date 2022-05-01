// https://www.codewars.com/kata/58dea43ff98a7e2124000169/train/javascript
function divideStrings(a,b) {
    // return [Math.floor(+a / +b).toString(), (+a % +b).toString()];  // This doesn't work on big numbers!
    
    // This works on big numbers! return format: [quotient, remainder]
    var quotient = "";
    var remainder = "";

    // If b is negative, make it positive and remember to make the quotient negative later
    var negative = false;
    if (b[0] === '-') {
        b = b.slice(1);
        negative = true;
    }

    // If a is negative, make it positive and remember to make the quotient negative later
    if (a[0] === '-') {
        a = a.slice(1);
        negative = !negative;
    }

    // If a is smaller than b, return [0, a]
    if (a.length < b.length) {
        return [0, a];
    }

    // If a is equal to b, return [1, 0]
    if (a === b) {
        return [1, 0];
    }

    // If a is bigger than b, divide a by b and return the quotient and remainder
    for (var i = a.length - 1; i >= 0; i--) {
        remainder = a[i] + remainder;
        if (remainder.length > b.length) {
            quotient = quotient + remainder[0];
            remainder = remainder.slice(1);
        }
        if (remainder.length === b.length) {
            var j = 0;
            while (remainder >= b) {
                remainder = remainder.slice(0, remainder.length - 1) + (remainder[remainder.length - 1] - '0' + 1).toString();
                j++;
            }
            quotient = quotient + j.toString();
        }
    }
    // If a is negative, make the quotient negative
    if (negative) {
        quotient = '-' + quotient;
    }
    // remove leading zeros
    while (quotient[0] === '0') {
        quotient = quotient.slice(1);
    }
    // If a is bigger than b, return the quotient and remainder
    return [quotient, remainder];
}