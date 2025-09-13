function ArrayReverseInPlace(arr) {

    // Method 1. Using built-in .reverse();
    // arr.reverse();
    // return arr;

    //  Method 2 . Using a loop (without .reverse())
    // let result=[];
    // for(let i=arr.length-1;i>=0;i--){
    //     result.push(arr[i])
    // }
    // return result;

    // Method 3 . Using two-pointer swap method (in-place, no extra array)
    // let left = 0;
    // let right = arr.length - 1;
    // while (left < right) {
    //     [arr[left], arr[right]] = [arr[right], arr[left]];
    //     left++;
    //     right--
    // }
    // return arr

    // Method 4 . Using map method

    return arr.map((_, i) => arr[arr.length - 1 - i]);
}


console.log(ArrayReverseInPlace([1, 2, 3, 4, 5, 6]))
