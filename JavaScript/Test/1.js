function double(array){
    'use strict';
    for(let i = 0; i < array.length; i++){
        array[i] *= 2;
    }
}

let numbers = [2, 4, 6];

console.log("Numbers of array before change:");

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

double(numbers);

console.log("Numbers of array after passed into 'double' function:");

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}