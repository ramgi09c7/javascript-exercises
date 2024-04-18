const reverseString = function(input) {
    let chars = input.split("")
    let res = ""
    for (let i = input.length-1 ; i>=0; i--){
        res += chars[i]
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
