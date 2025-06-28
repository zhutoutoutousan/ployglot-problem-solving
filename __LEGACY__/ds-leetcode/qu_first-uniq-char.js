/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // Queue
    let queue = [];
    let map = {};
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === undefined){
            map[s[i]] = 1;
            queue.push(i);
        } else {
            map[s[i]]++;
        }
    }
    while(queue.length > 0){
        let index = queue.shift();
        if(map[s[index]] === 1){
            return index;
        }
    }
    return -1;
};