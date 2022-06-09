/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Data Structure: Hash Table
    if(s.length !== t.length){
        return false;
    }
    let map = {};
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === undefined){
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for(let i = 0; i < t.length; i++){
        if(map[t[i]] === undefined || map[t[i]] === 0){
            return false;
        } else {
            map[t[i]]--;
        }
    }
    return true;
};