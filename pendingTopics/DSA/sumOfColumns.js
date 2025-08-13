function sumOfColumns(arr){
    let m = arr.length
    let n = arr[0].length
    let sums = new Array(m).fill(0)
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            sums[j]+=arr[i][j]
        }
    }
    arr.push(sums)
    return arr
}

console.log(sumOfColumns([[1,2,3],[4,5,6],[7,8,9]]))

