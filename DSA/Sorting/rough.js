const arr =[12,34,6,123,6,23,1]
function bubbleSort(arr){
    let n = arr.length
    for(let i=0;i<n;i++){
        let swapped = false
        for(let j=0;j<n-i-1;j++){
            if(arr[j]> arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        if(!swapped) break;
    }
    return arr
}

console.log(bubbleSort(arr))


function selectionSort(arr){
    let n = arr.length
    for(let i=0;i<n-1;i++){
        let minIndex = i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}

console.log(selectionSort(arr))


function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let current = arr[i]
        let j = i-1

        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = current
    }
    return arr
}

console.log(insertionSort(arr))