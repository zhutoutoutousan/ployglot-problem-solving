/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = [];
    let firstWord = words[0];
    for(let i = 0; i < firstWord.length; i++) {
        let char = firstWord[i];
        let found = true;
        for(let j = 1; j < words.length; j++) {
            let word = words[j];
            if(word.indexOf(char) === -1) {
                found = false;
                break;
            }
            words[j] = word.replace(char, '');
        }
        if(found) result.push(char);
    }
    return result;    
};