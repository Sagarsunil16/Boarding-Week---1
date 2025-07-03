// rearrange array elements by sign

const arr = [1,2,3,-1,-1,2,-1]

function rearrangeElem(arr){
    let negArr = arr.filter((num)=>num<0)
    let posArr = arr.filter((num)=>num>0)
    let result = []
    if(negArr.length<posArr.length){
        for(let i=0;i<negArr.length;i++){
            result[2*i] = posArr[i]
            result[2*i+1] = negArr[i]
        }
        let startIndex = 2 * negArr.length
        let posIndex = 2 * negArr.length
        for(let i=startIndex;i<arr.length;i++){
            result[i] = posArr[posIndex]
            posIndex++
        }
    }
    return result
}


console.log(rearrangeElem(arr))