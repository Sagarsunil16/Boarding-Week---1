function primeNumbers(n){
    for(let i=2;i<n;i++){
        if(i%n==0){
            console.log(i)
        }
    }
}

primeNumbers(25)