//Lab 1: Test
// Created by: Jose Efren Hernandez

//spread, rest

var myValue = Math.max(9,8,9,83);
//console.log(myValue);

function sum(...args){ // rest operator
    let numSum = 0;
    for (const arg of args)
    {
        numSum+=arg;
    }
    return numSum;
}

var myArray = [1,4,2];
console.log(sum(...myArray)); // spread operation

// Design a function to return multiplication of first two arguments, and sum of the rest

function sumX(a,b,...args)
{
    let numSum = 0;
    let product = a*b;
    for (const arg of args)
    {
        numSum+=arg;
    }
    return [numSum,product];

}

var myArray2 = [2,7,8,9];
console.log(sumX(4,5,...myArray2));




