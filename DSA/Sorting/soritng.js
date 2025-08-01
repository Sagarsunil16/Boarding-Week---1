const arr = [12,43,11,1,56,3,121,1]

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let current = arr[i]
        let j = i-1;
        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr
}


function quickSort(arr){
    if(arr.length<2){
        return arr
    }

    let left = []
    let right = []
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];

    for(let i=0;i<arr.length;i++){
        if (i === pivotIndex) continue; // Skip pivot
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(bubbleSort(arr))
console.log(insertionSort(arr))
console.log(quickSort(arr))