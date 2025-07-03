const input = {
  a: {
    b: {
      c: 1
    },
    d: 2
  }
};

function flatternObject(obj,parentKey = '',result={}){
    for(let key in obj){
        const newKey =  parentKey ? `${parentKey}.${key}` : key
        if(obj[key]!==null && typeof obj[key] == 'object'){
            flatternObject(obj[key],newKey,result)
        }else{
            result[newKey] =  obj[key]
        }
    }
    return result
}

console.log(flatternObject(input))
