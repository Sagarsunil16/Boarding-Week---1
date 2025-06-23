// Q: Reverse the words, not the characters
const str = "hello world this is sagar";
// Output: "sagar is this world hello"


function reverseWords(str){
    let result = ''
    for(let i=str.length-1;i>=0;i--){
        result+=str[i]
    }
    return result
}

console.log(reverseWords(str))