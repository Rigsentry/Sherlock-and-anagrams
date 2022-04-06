function isValid(s) {
    if(s.length===0) return "input error";
    var char = {};
    for (const c of s) {
        if(!char[c]) {
            char[c] = 1;
        }
        else char[c]++;
    }
    var minFreq = Number.MAX_VALUE;
    var charValidCounter = 0;
    for (const c in char) {
        if(char[c]<minFreq) {
            minFreq = char[c];
        }
    }
    for (const c in char) {
        if(char[c] - minFreq > 1) {
            return "NO";
        }
        else if(char[c] - minFreq === 1) {
            charValidCounter++;
        }
    }
    return charValidCounter <=1 ? "YES" : "NO";
}
const input0 = "aabbcd";
const input1 = "aabbccddeefghi";
const input2 = "abcdefghhgfedecba";
console.log(isValid(input0));
console.log(isValid(input1));
console.log(isValid(input2));