// FizzBuzz refactor #2 in ES6

// Algorithm

let fizzBuzz = n => {

    for (let i = 0; i < n;)

    console.log((++i % 3 ? '':'Fizz') + (i % 5 ? '':'Buzz') || i);

};

// Measures runtime of algorithm

const start = +new Date();
fizzBuzz(100);
const end = +new Date();
const diff = end - start;
console.log(diff);
