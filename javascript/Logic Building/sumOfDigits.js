//Create a program to calculate the sum of digits of a number.

function sumOfDigits(num){
    let result = 0
   while(num>0){
        result+= num%10
        num = Math.floor(num/10)
    }
    return result
}

console.log(sumOfDigits(55))