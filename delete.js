module.exports.arrayDiff = function(arr1, arr2){
    const set = new Set(arr2);
    let result =  arr1.filter(e => !set.has(e));

    return result
}