function multiplyBy(n){
    return function(num){
        return n * num
    }
}


const  double = multiplyBy(2)
console.log(double(2))