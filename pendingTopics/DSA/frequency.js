function frequency(arr){
    let freq  = new Map()
    for(let i=0;i<arr.length;i++){
        if(freq.has(arr[i])){
            freq.set(arr[i],freq.get(arr[i]) + 1)
        }else{
            freq.set(arr[i],1)
        }
    }
    return freq
}

console.log(frequency([1,22,1,2,22,2,1,3]))