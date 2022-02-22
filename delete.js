module.exports.arrayDiff = function(){
    const fs = require("fs")
    let str = fs.readFileSync("delete.txt", "utf8");
    const set = new Set(str[0].split(''));
    let result =  str[1].split('').filter(e => !set.has(e));

    return result
}