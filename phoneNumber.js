module.exports.createPhoneNumber = function(){
    const fs = require("fs");
    let str = fs.readFileSync("phoneNumber.txt", "utf8");
    let firstPart = str.substr(0,3)
    let secondPart = str.substr(3,3)
    let thirdPart = str.substr(6)

    return `(${firstPart}) ${secondPart}-${thirdPart} `
    
}