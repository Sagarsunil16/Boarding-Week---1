//Union of two sorted array

function unionOfTwoSortedArrays(arr1,arr2){
    const newArr = [...arr1,...arr2]
    let newSet = new Set(newArr)
   return [...newSet]
}
const arr1 = [1,2,3,4,5]
const arr2 = [1,2,3,4,5,6]
console.log(unionOfTwoSortedArrays(arr1,arr2))