function avgEven(arr){
    let evenArr = arr.filter((num)=>num%2==0) 
    let sum = evenArr.reduce((acc,curr)=> acc+curr,0)
    return evenArr.length? sum / evenArr.length : 0;
}

console.log(avgEven([1,2,3,4,5,6]))