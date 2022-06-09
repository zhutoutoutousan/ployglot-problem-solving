/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // Input sorted
    let i = 0;
    let j = numbers.length - 1;
    while(i < j){
        let sum = numbers[i] + numbers[j];
        if(sum === target){
            return [i + 1, j + 1];
        } else if(sum < target){
            i++;
        } else {
            j--;
        }
    }
    return [];
};