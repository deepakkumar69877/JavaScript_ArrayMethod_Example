function findLongestWord(arr) {
  return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}   
let words = ["apple", "banana", "cher", "date"];
let longestWord = findLongestWord(words);
console.log("The longest word is:", longestWord); // Output: "banana"

// 
function findLongestWord(arr) {
    let string=wordInstring.split(" ");
  return string.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}   
let wordInstring ="my name is deepak";
let longestWord = findLongestWord(wordInstring);
console.log("The longest word is:", longestWord); // Output: "deepak"

// Another example

function findLongestWord2(arr) {
    let longestWord="";
    arr.forEach(word=>{
        if(word.length>longestWord.length){
            longestWord=word;
        }
    })
    return longestWord;
}

let words2 = ["elephant", "dog", "hippopotamus", "cat"];
let longestWord2 = findLongestWord2(words2);
console.log("The longest word is:", longestWord2); // Output: "hippopotamus"


// Another example using for loop

function longestWord(str){
    let longest='';
    for(let i=0;i<str.length;i++){
        if(str[i].length>longest.length){
            longest=str[i]
        }
    }
    return longest;
}
console.log(longestWord(["hello","hiiiiiiiiiiii"])) // Output: "hiiiiiiiiiiii"

// Another example using for...of loop

function longestWord(str){
    let longest='';
    for(let string of str){
        if(string.length>longest.length){
            longest=string
        }
    }
    return longest;
}
console.log(longestWord(["hello","hiiiiiiiiiiii"]))




