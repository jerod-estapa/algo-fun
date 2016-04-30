// Fizz Buzz in ES6


const fizzBuzz = n => {
    for (let x = 1; x < n; x++) {
        // Checks if x is dvisible by 3 and 5
        if (x % 3 === 0 && x % 5 === 0){
            console.log("FizzBuzz");
        }
        // Checks if x is divisible by 3
        else if (x % 3 === 0) {
            console.log("Fizz");
        }
        // Checks if x is divisible by 5
        else if (x % 5 === 0) {
            console.log("Buzz");
        }
        // If no conditions fit, prints x
        else {
            console.log(x);
        }
    }
};

// Measures runtime of algorithm

const start = +new Date();
fizzBuzz(100);
const end = +new Date();
const diff = end - start;
console.log("\n\n The runtime of fizzBuzz is " + diff + " milliseconds.");