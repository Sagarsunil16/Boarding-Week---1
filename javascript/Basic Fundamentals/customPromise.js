// Q: Create a function that returns a custom Promise that resolves after 2 seconds
function customPromise(){
    return new Promise((reolve,reject)=>{
        setTimeout(()=>{
            reolve('Done')
        },2000)
    })
}

const custom = customPromise()
custom.then(()=>console.log(
    "Done"
))