function selectionSort(arr){
    let n= arr.length
    for(let i=0;i<n;i++){
        let minIndex = i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr
}
const arr =[14,5,6,7,8]
console.log(selectionSort(arr))