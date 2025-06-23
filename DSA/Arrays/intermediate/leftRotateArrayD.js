//left rotate an array by D places.
const arr = [1,12,12,33,44,55,55]  
//Brute force approach
// function leftRotateArrayDplaces(arr,d){
//     let temp = []
//     let n =arr.length
//     d = d%n
   
//     for(let i=0;i<d;i++){
//         temp.push(arr[i])
//     }
//     for(let i=d;i<n;i++){
//         arr[i-d] =  arr[i]
//     }
    
//     for(let i=0;i<temp.length;i++){
//         arr[n-d+i] = temp[i]
//     }
//     return arr
// }


    //Optimal Solution
    function leftRotateArrayDplaces(arr,d){
        let n = arr.length
        d = d%n
       reverseArray(arr,0,d-1)
       reverseArray(arr,d,n-1)
       reverseArray(arr,0,n-1)

       return arr

    }

    function reverseArray(arr,start,end){
        while(start<end){
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++ 
            end--
        }
    }

console.log(leftRotateArrayDplaces(arr,3))