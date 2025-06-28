// https://www.codewars.com/kata/59eaf81cfc3c4907a1000082/train/javascript

const isSumPair = /(\d+\?{3}\d+)/;
// Check if s matches isSumPair, if so check if the sum of digits on both sides of question mark is ten, if so, return true, if not, return false
sum10 = s => s.match(isSumPair) && (s.match(isSumPair)[0].split('???').reduce((a, b) => parseInt(a) + parseInt(b) === 10));

sum10 = s => {
    const arr = s.match(isSumPair);
    if (arr) {
        const [a, b] = arr[0].split('???');
        return a + b === 10;
    }
    return false;
}