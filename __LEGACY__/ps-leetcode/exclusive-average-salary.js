/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    // Given an array of integers, return the average of all the integers, except the maximum and minimum elements.
    // Code
    let sum = 0;
    for(let i = 0; i < salary.length; i++) {
        sum += salary[i];
    }
    return (sum - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2);
};

