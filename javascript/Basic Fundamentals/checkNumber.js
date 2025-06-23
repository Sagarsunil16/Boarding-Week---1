//Check whether a number is positive, negative, or zero.

function checkNumber(num){
    if(num<0){
        console.log(num,"is a negative number")
    }else if(num>0){
        console.log(num,"is a positive number")
    }else{
        console.log(num,"is Zero")
    }
}

checkNumber(-1)
checkNumber(0)
checkNumber(1)