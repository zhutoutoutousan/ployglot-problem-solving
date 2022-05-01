// https://www.codewars.com/kata/59eaf81cfc3c4907a1000082/train/javascript

const isSumPair = /(\d\?{0,3}\d+)/;
sum10= s => s.match(isSumPair) ? s.match(isSumPair).every(x => x.split(/\?+/).reduce((a,b) => parseInt(a) + parseInt(b)) === 10) : false;
