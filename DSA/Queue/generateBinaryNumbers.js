//Generate Binary Numbers from 1 to N using Queue

function generateBinaryNumbers(n){
    let result = []
    let queue = []
    queue.push("1")
    for(let i=0;i<n;i++){
        let current =  queue.shift()
        result.push(current)
        queue.push(current + "0")
        queue.push(current + "1")
    }
    return result
}


console.log(generateBinaryNumbers(5))