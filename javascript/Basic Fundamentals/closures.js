function counter(){
    let count = 0
    return function(){
        console.log(count++)
    }
}


let count = counter()
count()
count()
count()
count()