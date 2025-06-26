//fnd the maximum consecutive ones
const arr = [1,1,0,1,1,1,0,1,1]
function maximumConsecutiveOnes(arr){
    let max = 0
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            count++
            max = Math.max(max,count)
        }else{
            count =0
            }
        }
    return max
}

console.log(maximumConsecutiveOnes(arr))