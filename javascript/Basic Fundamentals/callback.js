// ## **CALLBACK**

// A callback function in JavaScript is a function that is passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action


const  myMap = ((arr,callback)=>{
    let result = []
    for(let i=0;i<arr.length;i++){
        if(callback){
            result.push(callback(arr[i],i,arr))
        }
    }
    return result
})

const doubleTheValue = ((value,index,array)=>{
    return [value *2 ,index , array]
})


const arr = [1,2,3,4,5]
console.log(myMap(arr,doubleTheValue))
// console.log(arr.map((value,index,array)=>[value * 2,index,array]))