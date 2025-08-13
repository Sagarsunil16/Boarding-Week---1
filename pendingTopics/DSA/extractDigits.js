function extractDigits(str){
    return str.match(/\d/g) || []
}

console.log(extractDigits("sdas312e"))