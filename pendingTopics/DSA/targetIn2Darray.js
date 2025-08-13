//find target in 2d array

function findTarget(arr,target){
    let m = arr.length
    let n = arr[0].length
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(arr[i][j] === target){
                return [i,j]
            }
        }
    }
    return -1
}

console.log(findTarget([[1,2,3],[5,6,9],[10,23,34]], 34))