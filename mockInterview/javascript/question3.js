function debounce(func,delay){
    let timeoutId;
    return function(...args){
        clearInterval(timeoutId)
        timeoutId = setTimeout(() => {
            func.apply(this,args)
        }, delay);
    }
}

{/* <button id="myBtn">Click Me Fast!</button> */}

function handleClick(){
        console.log('Button clicked!')
}

const debouncedClick = debounce(handleClick,1000)

// document.getElementById('myBtn').addEventListener('click',debouncedClick)



// function debounce(myFunc,delay){
//     let timeoutId
//     return function(...args){
//         clearTimeout(timeoutId)
//         timeoutId = setTimeout(()=>{
//             myFunc.apply(this,args)
//         },delay)
//     }
// }