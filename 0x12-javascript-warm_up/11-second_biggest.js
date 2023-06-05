#!/usr/bin/node

const arr = process.argv.slice(2)
const newArr = arr.map(element => parseInt(element))

function biggest(Arr){
    result = 0
    for (i=0; i<Arr.length; i++){
        if (Arr[i] > result){
            result = Arr[i]
        }
    }
    return result
}

console.log(biggest(newArr))