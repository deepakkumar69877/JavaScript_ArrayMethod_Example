let numArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

let frequencyCount = numArray.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(frequencyCount);


// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }
// Find frequency of elements in an array       
// [1,2,2,3,3,3,4,4,4,4] => {1:1,2:2,3:3,4:4}

// Using Map
let freqMap = new Map();        
numArray.forEach(num => {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
});

console.log(Object.fromEntries(freqMap));       
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }

// Using Object
let freqObj = {};        
numArray.forEach(num => {
    freqObj[num] = (freqObj[num] || 0) + 1;
});     

console.log(freqObj);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }

// Using Reduce
let freqReduce = numArray.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(freqReduce);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }  
 

// Using for loop
let freqForLoop = {};
for (let i = 0; i < numArray.length; i++) {
    freqForLoop[numArray[i]] = (freqForLoop[numArray[i]] || 0) + 1;
}
console.log(freqForLoop);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }   

// Using filter and length
let uniqueElements = [...new Set(numArray)];
let freqFilter = {};    
uniqueElements.forEach(num => {
    freqFilter[num] = numArray.filter(x => x === num).length;
});
console.log(freqFilter);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }   

// Using for...of loop
let freqForOf = {};
for (let num of numArray) {
    freqForOf[num] = (freqForOf[num] || 0) + 1;
}
console.log(freqForOf);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }   
// Using while loop
let freqWhile = {};
let i = 0;
while (i < numArray.length) {   
    freqWhile[numArray[i]] = (freqWhile[numArray[i]] || 0) + 1;
    i++;
}
console.log(freqWhile);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }

// Using forEach with arrow function
let freqForEach = {};
numArray.forEach(num => freqForEach[num] = (freqForEach[num] || 0) + 1);
console.log(freqForEach);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }       

// Using forEach with regular function
let freqForEachReg = {};
numArray.forEach(function(num) {
    freqForEachReg[num] = (freqForEachReg[num] || 0) + 1;
});
console.log(freqForEachReg);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }   

// Using forEach with regular function
let freqForEachReg2 = {};
numArray.forEach(function(num) {
    if (freqForEachReg2[num]) {
        freqForEachReg2[num]++;
    } else {
        freqForEachReg2[num] = 1;
    }
});
console.log(freqForEachReg2);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }    

// Using for loop with if-else
let freqForLoopIfElse = {};     
for (let i = 0; i < numArray.length; i++) {
    if (freqForLoopIfElse[numArray[i]]) {
        freqForLoopIfElse[numArray[i]]++;
    } else {
        freqForLoopIfElse[numArray[i]] = 1;
    }
}
console.log(freqForLoopIfElse);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }   

// Using reduce with if-else
let freqReduceIfElse = numArray.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }       

    return acc;
}, {});
