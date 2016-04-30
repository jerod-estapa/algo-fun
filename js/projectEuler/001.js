// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Algorithm

const findMults = n => {
    
    let x = 0;

    for (let i=1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            x += i;
        }
    }
    
    console.log(x);
};

// Measure algorithm runtime

const start = +new Date();
findMults(1000);
const end = +new Date();
const diff = end - start;
console.log("\n\n The runtime of findMults is " + diff + " milliseconds.");