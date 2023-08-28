/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let separateArray = separateArrayByZero(nums);
};

// Sample input: [1,2,0,0,2,3,4,0,0,1,2,0]
// Sample output: [[1,2], [2,3,4], [1,2]]
var separateArrayByZero = function(nums) {
    let separateArray = Array(20);
    let separateArrayIndex = 0;
    // Traverse nums, if nums[i] is 0, continue until nums[i] is not 0, then push it to another array
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            let j = i;
            while(nums[j] === 0){
                j++;
            }
            i = j - 1;
            separateArrayIndex++;
        }else{
            if(separateArray[separateArrayIndex] === undefined){
                separateArray[separateArrayIndex] = [];
            }
            separateArray[separateArrayIndex].push(nums[i]);
        }
    }
    return separateArray;
}