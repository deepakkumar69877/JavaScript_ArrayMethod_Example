let arr=[1,2,3,4,5,2,3,4,5,6,7,8,9,1];

let uniqueArr=[...new Set(arr)];

console.log("Original Array:",arr);
console.log("Array after removing duplicate elements:",uniqueArr);

let uniqueArray2=[];

for(let i=0;i<arr.length;i++){
    if(!uniqueArray2.includes(arr[i])){
        uniqueArray2.push(arr[i])
    }
}

console.log("Array after removing duplicate elements (Method 2):",uniqueArray2);

// method 3 using filter method

let unique=arr.filter((item,index)=>arr.indexOf(item)===index)


console.log("Array after removing duplicate elements (Method 3):",unique)


// ************************************************************

let array = [1, 2, 3, 2, 4, 1, 5, 3];

let unique2=[];
for(let num of array){
    if(!unique2.includes(num)){
        unique2.push(num)
    }
}
console.log(unique2);

let unique3=[];
for(let i=0;i<arr.length;i++){
    if(unique3.indexOf(arr[i])===-1){
        unique3.push(arr[i])
    }
}
console.log(unique3);

let res=array.filter((item,index)=>array.indexOf(item)===index);

console.log(res)
