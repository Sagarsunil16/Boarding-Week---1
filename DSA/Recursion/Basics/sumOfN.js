// Sum of first N natural numbers

function sum(n){
    if(n==1){
        return n
    }
    return n + sum(n-1)
}

 console.log(sum(5))