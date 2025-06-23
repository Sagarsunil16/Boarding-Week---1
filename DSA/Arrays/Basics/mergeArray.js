// Merge two sorted arrays.

function mergeTwoSortedArrays(arr1,arr2){
    let i =0;
    let j = 0
    let result = []
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }

    //add remaining elements
    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }

    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}

console.log(mergeTwoSortedArrays([1,2,3,4,53,55,67,88],[23,43,55,66,777]))