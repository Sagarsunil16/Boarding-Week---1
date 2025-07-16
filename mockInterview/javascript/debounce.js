function debounce(fn,delay){
    let timeoutId
    return function(...args){
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
}

function sayHello(){
    console.log("Hello")
}


const debouncedHello  =  debounce(sayHello,3000)
debouncedHello()
debouncedHello()
debouncedHello() // Only this one should execute after 3 second