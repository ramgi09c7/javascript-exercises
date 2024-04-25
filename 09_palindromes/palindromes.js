function sanitizeWord(word){
    const sanitized = word.replace(/[^\w\s]/g, "").replace(/\s+/g, "")
    return sanitized.toLowerCase()
}

const palindromes = function (text) {
    let input = sanitizeWord(text)
    if (input.length % 2 === 0){
        let middle = Math.floor(input.length / 2)
        let pt1 = input.slice(0, middle).toLowerCase()
        let pt2 = input.slice(middle).toLowerCase()
        return pt2.split("").reverse().join("").localeCompare(pt1) === 0 ? true : false
    } else {
        let middle = Math.floor(input.length / 2)
        let pt1 = input.slice(0, middle).toLowerCase()
        let pt2 = input.slice(middle+1).toLowerCase()
        return pt2.split("").reverse().join("").localeCompare(pt1) === 0 ? true : false
    }
};



console.log(palindromes("racecar"))

// Do not edit below this line
module.exports = palindromes;
