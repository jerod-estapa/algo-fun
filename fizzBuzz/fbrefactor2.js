// FizzBuzz refactor #2 in ES6

for (let i = 0; i < 100;)

  console.log((++i % 3 ? '':'Fizz') + (i % 5 ? '':'Buzz') || i)
