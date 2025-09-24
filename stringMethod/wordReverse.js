let str="deepak kumar yadav is my name";
// method 1
let res=str.split(" ").reverse().join(" ");

// method2
let word=str.split(" ");
let reverseWord=[];
for(let i=word.length-1;i>=0;i--){
    reverseWord.push(word[i])
}
let final=reverseWord.join(" ")

console.log(final);


// vowels check
let vowels="aeiouAEIOU";
count=0;
for(let vowel of "programming"){
    if(vowels.includes(vowel)){
        count++
    }
}
console.log(count)

// remove dublicates
function removeDuplicates(str) {
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}
console.log(removeDuplicates("aabbccdde")); // "abcde"



// 2nd way
let names=["deepak","kumar","yadav","deepak","kumar"];

let uniqueNames='';
for(let char of names){
    if(!uniqueNames.includes(char)){
        uniqueNames += char;
    }
    
}


console.log(uniqueNames);

// 3rd way

// let names=["deepak","kumar","yadav","deepak","kumar"];

// let unique=[];
// for(let char of names){
//     if(!unique.includes(char)){
//         unique.push(char)
//     }
// }
// let final =unique.join(" ")
// console.log(final);



// string ko number me conversion ke liye

// let str="123";
// let num=Number(str); function ke case me 
// let num = parseInt(str); integer ke case me
// let num = parseFloat(str); float ke case me


console.log(num)
