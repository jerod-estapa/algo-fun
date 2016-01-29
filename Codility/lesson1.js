// Codility - Lesson 1

// Write a function that, given a positive integer N, returns the length of its longest binary gap.

// The function should return 0 if N doesn't contain a binary gap.


let dec2bin = dec => {
  
  if (dec > 2.14e+9){
  
	console.log("Input is too big!");
    
  }
  
  else {
  
    let bin = (dec >> 0).toString(2);

    return bin;
    
  }
  
  
  
};

console.log(dec2bin(5000));
console.log(dec2bin(3e+9));