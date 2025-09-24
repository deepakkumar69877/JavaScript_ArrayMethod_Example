function SortingArrayMethod(){
    let arr=[1,20,4,23,5];
    arr.sort((a,b)=>b-a);
    console.log(arr);
}

SortingArrayMethod();

// Output: [1, 4, 5, 20, 23]
// Explanation: The sort() method sorts the elements of an array in place and returns the sorted array.
//  The default sort order is ascending, built upon converting the elements into strings, then comparing
//  their sequences of UTF-16 code unit values.

// In the example above, we provided a compare function (a, b) => b - a to sort the array in descending order.
// If the result is negative, a is sorted before b. If positive, b is sorted before a. 
// If zero, their order remains unchanged.  

// Note: The sort() method changes the original array. If you want to keep the original array unchanged,
// you can create a copy of the array using the spread operator (...) or the slice() method before sorting. 

let arr = [1, 20, 4, 23, 5];
let selection = [...arr];
for (let i = 0; i < selection.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < selection.length; j++) {
        if (selection[j] < selection[minIndex]) {
            minIndex=j;
        }
    }
    // swap
  [selection[i],selection[minIndex]]=[selection[minIndex],selection[i]]
}

console.log("Selection Sort:",selection);

console.log("Original Array:",arr);
        

// Selection Sort Explanation:
// Selection sort is a simple comparison-based sorting algorithm. It divides the input list into two parts: 
// a sorted and an unsorted region. The algorithm repeatedly selects the smallest (or largest, depending on the order)  
// element from the unsorted region and swaps it with the leftmost unsorted element, moving the boundary between
// the sorted and unsorted regions one element to the right. This process continues until the entire array is sorted.
// The time complexity of selection sort is O(n^2) in all cases (best, average, and worst) because it always
// involves nested loops to find the minimum element and perform the swap. Selection sort is not a stable sort,
// meaning that it does not preserve the relative order of equal elements. It is also an in-place sorting algorithm,
// requiring only a constant amount of additional memory space (O(1)). However, due to its quadratic time complexity,
// selection sort is inefficient for large datasets compared to more advanced algorithms like quicksort or mergesort.           


