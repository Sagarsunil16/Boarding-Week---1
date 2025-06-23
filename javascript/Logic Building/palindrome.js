//Check if a number is a palindrome.

function palindrome(num){
    let actualValue = num
    let revNum = 0
    while(num>0){
        revNum = revNum * 10 + num%10
        num = Math.floor(num/10)
    }
    return revNum ===  actualValue;
}

console.log(palindrome(121))
console.log(palindrome(125))
console.log(palindrome(12521))