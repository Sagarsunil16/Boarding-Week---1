// Q: Return an object with the frequency of each number
const arr = [1, 2, 2, 3, 4, 4, 4, 5];

function frequencyCounter(arr){
    let freq = new Map()
    for(let num of arr){
        freq[num] = freq[num] ?  freq[num] + 1: 1
    }

    return freq
}

console.log(frequencyCounter(arr))