function fibonacci(num){
    if(num <2){
        return num
    }

    return fibonacci(num-1) + fibonacci(num-2)
}

let series= []
for(let i=0;i<10;i++) series.push(fibonacci(i))
console.log(series);
