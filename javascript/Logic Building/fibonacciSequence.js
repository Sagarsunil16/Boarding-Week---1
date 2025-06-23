//Print Fibonacci sequence up to n terms.

function fibonacciSequence(num){
    let a = 0
    let b = 1
    let str = ''
    for(let i=0;i<num;i++){
        str+= `${a}->`
        let next = a+b
        a = b
        b = next
    }
    return str
}

console.log(fibonacciSequence(10))