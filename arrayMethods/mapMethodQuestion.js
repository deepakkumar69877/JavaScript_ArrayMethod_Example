let arr=[1,5,4,2,3];
// Square each number in an array

let res=arr.map((item)=>item*item)
console.log(res)

// Convert array of strings to uppercase

let names = ["deepak", "kumar", "yadav"];

let upperName=names.map(str=>str.toUpperCase());
console.log(upperName);

// Extract a property from array of objects
let users=[
    {name:"deepak",post:"Bairiya",village:"Ashopur"},
    {name:"chandan",post:"Bairiya",village:"Ashopur"},
    {name:"Raushan",post:"Bairiya",village:"Ashopur"}
]

let usersName=users.map(user=>user.post);

console.log(usersName)

// Add index to each element

// let arr2 = ["a", "b", "c"];
// let indexed = arr2.map((val, index) => `${index} -> ${val}`);
// console.log(indexed); 
// // ["0 -> a", "1 -> b", "2 -> c"]

let arr2=["a","b","C","D"];

let indexed=arr2.map((val,index)=>`${index} -> ${val}`);
console.log(indexed);

// Transform array into objects

let fruit=["apple","mango","gauva"]

let fav=fruit.map(fruit=>({fruit}));

console.log(fav)

// Double even numbers and sum them

let number=[1,2,3,4,5,6];

let sumResult=number.filter(num=>num%2===0)
                    .map(num=>num*num)
                    .reduce((num,i)=>num+i,0);
console.log(sumResult);                    
                    









