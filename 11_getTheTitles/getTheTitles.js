const getTheTitles = function(input) {
    let res = []
    for (let i = 0; i < input.length; i++){
        res.push(input[i].title)
    }
    return res
};

// Do not edit below this line
module.exports = getTheTitles;
