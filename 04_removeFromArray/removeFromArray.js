const removeFromArray = function(array, ...args) {
    let res = removeElArray(array,args[0])
    for (let i = 1; i < arguments.length; i++){
        res = removeElArray(res, arguments[i])
    }
    console.log(res)
    return res
};

const removeElArray = function(array, num) {
    const ind = array.indexOf(num)

    if (ind === -1){
        return array
    }  

    let res = newArray(array, ind)
 
    while (res.indexOf(num) !== -1){
        res = newArray(res, res.indexOf(num))
    }
    return res

};

const newArray = function(array, index){
    let array_pt1 = array.slice(0, index)
    let array_pt2 = array.slice(index+1)
    return array_pt1.concat(array_pt2)
}

removeFromArray([1,2,3,4,2,5,3], 1,2,3)
// Do not edit below this line
module.exports = removeFromArray;
