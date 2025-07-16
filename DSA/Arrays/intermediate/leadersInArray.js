//everything on the right should be smaller

const arr = [5,1,5,22,11,10,7,8,9]
function leaderArr(arr){
    let result = []
    let n = arr.length-1
    let MaxFromRight = -Infinity
     for(let i=n ; i>=0;i--){
        if(arr[i]>MaxFromRight){
            result.push(arr[i]);
            MaxFromRight = arr[i]
        }
    }
    return result
}

console.log(leaderArr(arr))
