function addMiddle(arr,num){
    let middle = Math.floor(arr.length/2)
    arr.splice(middle,0,num)
    return arr
}

console.log(addMiddle([1,2,4,5],3))