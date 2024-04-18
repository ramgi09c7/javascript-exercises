const sumAll = function(a,b) {
    let sum = 0
    let ab = [a,b].sort()
    if (Number.isInteger(a) && Number.isInteger(b) && a>=0 && b>=0)
    for (let i = ab[0]; i <= ab[1]; i++){
        sum += i;
    } else {
        return "ERROR"
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
