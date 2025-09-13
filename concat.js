// let arr=[1,2,3,4];

// let arr2=[5,6,7,8];

// let newArr=arr2.concat(arr);

// console.log(newArr); 

// let arr=[1,2,[2,3],[4,5]];
// let arr2=[5,6,7,8];
// let arr3=[9,10];

// let newArr=arr.concat(arr3, arr2);

// let arr=[5,6,7,8];
// let arr2=[9,10];

// let newArr=arr.concat(arr2,79,89);

// console.log(newArr);


// 5,6,7,8,79,89,9,10

// var randomList = [1, 2, 3];



// let arr2=[4,5,6];

// console.log(arr2.concat(randomList));
// randomList[2]=0;

// console.log(randomList);



// *************************************

// constructor method

// let languages = ["JavaScript", "Java", "Python"];

// let constructor = languages.constructor;
// console.log(constructor)

// Output:
// [Function: Array]

// It gives the information about the Array constructor function.
// basically it gives the type of the variable or object.


let arr=[1,2,3,4,5,6];

arr.copyWithin(0,3);

console.log(arr);
