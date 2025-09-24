console.log(0 == false);   // true
console.log(0 === false);  // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log('' == false); // true
console.log('' === false); // false
console.log([] == false); // true
console.log(Boolean([]) === false); // false
// console.log([] === false); // false
console.log([1, 2] == '1,2'); // true
// console.log([1, 2] === '1,2');  // false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(typeof NaN); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof function () { });    // function
console.log(typeof (() => { })); // function
console.log(typeof new Date()); // object
console.log(typeof /abc/); // object
console.log(typeof Math); // object
console.log(typeof JSON);   // object           
console.log(typeof arguments); // object
console.log(typeof Infinity);   // number
console.log(typeof -Infinity);  // number   
console.log(typeof BigInt(123)); // bigint
console.log(typeof Symbol('sym')); // symbol
console.log([] + []); // ''
console.log([] + {}); // '[object Object]'
console.log({} + []); // 0
console.log({} + {}); // NaN        
console.log([] + 1); // '1'
console.log(1 + []); // '1'
console.log({} + 1); // NaN
console.log(1 + {}); // '1[object Object]'
console.log('1' + {}); // '1[object Object]'
console.log({} + '1'); // '[object Object]1'
console.log('1' + []); // '1'
console.log([] + '1'); // '1'
console.log('1' + 1); // '11'
console.log(1 + '1'); // '11'
console.log('1' + '1'); // '11'     
console.log(1 + 1); // 2
console.log('1' - '1'); // 0
console.log('1' - 1); // 0
console.log(1 - '1'); // 0
console.log('1' * '1'); // 1
console.log('1' * 1); // 1
console.log(1 * '1'); // 1
console.log('1' / '1'); // 1
console.log('1' / 1); // 1
console.log(1 / '1'); // 1
console.log('1' / 0); // Infinity
console.log(1 / 0); // Infinity
console.log('1' / -0); // -Infinity
console.log(1 / -0); // -Infinity
console.log('1' / []); // Infinity
console.log(1 / []); // Infinity
console.log('1' / {}); // NaN
console.log(1 / {}); // NaN
console.log('1' * []); // 0
console.log(1 * []); // 0
console.log('1' * {}); // NaN
console.log(1 * {}); // NaN
console.log('1' + null); // '1null'
console.log(1 + null); // 1
console.log('1' - null); // 1
console.log(1 - null); // 1
console.log('1' + undefined); // '1undefined'
console.log(1 + undefined); // NaN
console.log('1' - undefined); // NaN
console.log(1 - undefined); // NaN
console.log('1' + NaN); // '1NaN'
console.log(1 + NaN); // NaN
console.log('1' - NaN); // NaN
console.log(1 - NaN);   // NaN      
console.log(true + true); // 2
console.log(true + false);  // 1
console.log(false + true); // 1
console.log(false + false); // 0
console.log(true + 1); // 2
console.log(1 + true); // 2
console.log(false + 1); // 1        
console.log(1 + false); // 1
console.log(true + '1'); // 'true1'
console.log('1' + true); // '1true'
console.log(false + '1'); // 'false1'
console.log('1' + false); // '1false'       
console.log(true + null); // 1
console.log(null + true); // 1  
console.log(false + null); // 0
console.log(null + false); // 0
console.log(true + undefined); // NaN
console.log(undefined + true);  // NaN
console.log(false + undefined); // NaN          

