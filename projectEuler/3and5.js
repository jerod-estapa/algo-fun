// Add all the multiples of three and five below 1000

let x = 0;

for (let i=1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    x += i;
  }
}

console.log(x);
