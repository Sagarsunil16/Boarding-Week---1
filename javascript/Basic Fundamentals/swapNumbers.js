//Swap two numbers without using a third variable.

function swapNumber(a,b){
    console.log(a,b,"Before swapping")
    a = a + b
    b = a - b
    a = a - b
    console.log(a,b,"after swapping")
}


swapNumber(10,5)