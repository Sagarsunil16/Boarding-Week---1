// -find the second longest word in sentence

function secondLargestWord(str){
    let largest = ""
    let secondLargest = ""
    let arr =  str.split(" ")
    console.log(arr)
    for(let i=0;i<arr.length;i++){
        if(arr[i].length> largest.length){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i].length > secondLargest.length && arr[i].length < largest.length){
            secondLargest =  arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargestWord("My name is Sagar ashish"))