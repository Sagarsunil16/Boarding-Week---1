//  a function that increments and remembers count

// function createCounter(){
//     let count = 0
//     return function(){
//         count++
//         return count
//     }
// }

function createCounter(){
    return{
        count:0,
        increment:function(){
            this.count++
            return this.count
        }
    }
}

const counter = createCounter()
console.log(counter.increment())
console.log(counter.increment())