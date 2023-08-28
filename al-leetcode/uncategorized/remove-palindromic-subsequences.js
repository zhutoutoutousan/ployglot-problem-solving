/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if(s.length === 0){
        return 0;
    }
    let i = 0;
    let j = s.length - 1;
    while(i < j){
        if(s[i] === s[j]){
            i++;
            j--;
        } else {
            return 2;
        }
    }
    return 1;
};