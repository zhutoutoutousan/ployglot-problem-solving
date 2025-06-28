// base64_to_base10("/") # => 63
// base64_to_base10("BA") # => 64
// base64_to_base10("BB") # => 65
// base64_to_base10("BC") # => 66
function base64toBase10(base64) {
    // base64 to decimal
    var decimal = 0;
    var base64_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0; i < base64.length; i++) {
        decimal += base64_alphabet.indexOf(base64[i]) * Math.pow(64, base64.length - i - 1);
    }
    return decimal;
}