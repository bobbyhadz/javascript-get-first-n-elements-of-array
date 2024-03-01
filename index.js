// EXAMPLE 1 - Get the first N elements of an Array in JavaScript

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// ✅ get first 2 elements on an array
const first2 = arr.slice(0, 2);
console.log(first2); // 👉️ ['a', 'b']

// ✅ get first 3 elements on an array
const first3 = arr.slice(0, 3);
console.log(first3); // 👉️ ['a', 'b', 'c']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the first N elements of an Array using destructuring

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// const [first, second] = arr;

// console.log(first); // 👉️ 'a'
// console.log(second); // 👉️ 'b'

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the first N elements of an Array using a `for` loop

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// const newArray = [];

// const n = 3;

// for (let index = 0; index < n; index++) {
//   newArray.push(arr[index]);
// }

// console.log(newArray); // 👉️ [ 'a', 'b', 'c' ]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the first N elements of an Array using `filter`

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// const n = 3;

// const first3 = arr.filter((element, index) => index < n);
// console.log(first3); // 👉️ [ 'a', 'b', 'c' ]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the first N elements of an Array using `lodash`

// import _ from 'lodash';

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// const first2 = _.take(arr, 2);
// console.log(first2); // 👉️ [ 'a', 'b' ]

// const first3 = _.take(arr, 3);
// console.log(first3); // 👉️ [ 'a', 'b', 'c' ]
