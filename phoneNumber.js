module.exports.createPhoneNumber = function(array){
    let str = array.join('');
    let firstPart = str.substr(0,3)
    let secondPart = str.substr(3,3)
    let thirdPart = str.substr(6)

    return `(${firstPart}) ${secondPart}-${thirdPart} `
}