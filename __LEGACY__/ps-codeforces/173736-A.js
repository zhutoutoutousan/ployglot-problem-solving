// run on javascript V8 4.8.0
// Find consecutive occurrences of "hznu" in the long string
function main() {
    var s = readline();
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.slice(i, i+4) == 'hznu') {
            count++;
        }
    }
    print(count);
}

main();
