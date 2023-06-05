#!/usr/bin/node

// getting the first argument 
let number = parseInt(process.argv[2])

// a function to calculate the factorial with recursion
function factorial(num){
    if (num == 1){
        return num
    }

    return num * factorial(num - 1)
}

// print result
console.log(factorial(number))