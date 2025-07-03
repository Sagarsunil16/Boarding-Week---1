//Print numbers from 1 to N using recursion

function printNumber(n,i=1){
    if(i>n){
        return n
    }
    console.log(i)
    printNumber(n,i+1)
}

printNumber(5)