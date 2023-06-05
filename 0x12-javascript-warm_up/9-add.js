#!/usr/bin/node

// getting the first and second arguments and converting to int
let firstInt = parseInt(process.argv[2])
let secondInt = parseInt(process.argv[3])

// addition of the two integers
if(!isNaN(firstInt) && !isNaN(secondInt)){
    result = firstInt + secondInt
    console.log(result)
}
else{
    console.log("NaN")
}