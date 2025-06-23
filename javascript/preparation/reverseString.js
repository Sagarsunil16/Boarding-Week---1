// Q4: Reverse a string without using .reverse()

function reverseString(str){
    let newStr = ""
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i]
    }
    return newStr
}

console.log(reverseString("sagar"))