// Write a function to sort an array of numbers using insertion sort.


function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        let current = arr[i]
        let j = i-1

        while(j>=0 && arr[j] >  current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr
}

const arr = [32,1,552,124,1,56,23,2]

console.log(insertionSort(arr))