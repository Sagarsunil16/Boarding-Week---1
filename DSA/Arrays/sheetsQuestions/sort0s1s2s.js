    //sort the array of containing elements of 0s,1s,2s without using any sorting algos

    const arr = [0,0,0,1,0,2,0,1,0,2,0,0]

    function sort(arr){
        let low = 0
        let mid = 0
        let high = arr.length-1

        while(mid<=high){
            if(arr[mid]===0){
                [arr[low],arr[mid]] = [arr[mid],arr[low]]
                low++
                mid++
            }else if(arr[mid] === 1){
                mid++
            }else{
                [arr[mid],arr[high]] = [arr[high],arr[mid]]
                high--
            }
        }

        return arr
    }

    console.log(sort(arr))