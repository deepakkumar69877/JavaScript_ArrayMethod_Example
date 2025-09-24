console.log(hoistedVar); // undefined
var hoistedVar = 5;
console.log(hoistedVar); // 5
// Explanation: Variable declarations (using var) are hoisted to the top of their 
// scope and initialized with undefined.

console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 10;
console.log(hoistedLet);    // 10
// Explanation: Variables declared with let and const are hoisted but not initialized. 
// Accessing them before their declaration results in a ReferenceError.

hoistedFunction(); // "I am hoisted!"
function hoistedFunction() {
    console.log("I am hoisted!");
}   
// Explanation: Function declarations are hoisted to the top of their scope,
// allowing them to be called before their definition.      

// console.log(notHoistedFunction()); // TypeError: notHoistedFunction is not a function
var notHoistedFunction = function() {
    return "I am not hoisted!";
}   
console.log(notHoistedFunction()); // "I am not hoisted!"
// Explanation: Function expressions assigned to variables are not hoisted. 
// The variable is hoisted but initialized with undefined, leading to a TypeError 
// if you try to call it before the assignment. 

// console.log(notHoistedArrowFunction()); // TypeError: notHoistedArrowFunction is not a function
let notHoistedArrowFunction = () => {
    return "I am also not hoisted!";
}       
console.log(notHoistedArrowFunction()); // "I am also not hoisted!"
// Explanation: Arrow functions assigned to variables behave like function expressions. 
// They are not hoisted, and accessing them before their declaration results in a TypeError.        
// Summary:
// - var declarations are hoisted and initialized with undefined.
// - let and const declarations are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.
// - Function declarations are fully hoisted and can be called before their definition.
// - Function expressions and arrow functions assigned to variables are not hoisted, 
//   and accessing them before their assignment results in a TypeError.
  





