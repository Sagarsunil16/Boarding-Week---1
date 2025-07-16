function counterClosure(){
    count = 0
    return function(){
        count++
        console.log(count)
    }
}

const incrementCount = counterClosure()
incrementCount()
incrementCount()
incrementCount()