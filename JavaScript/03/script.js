const arr = [1, 2, 3, 4, 5];
//  [5, 4, 3, 2, 1]
// [6, 5, 4, 3, 2, 1, 0]
arr.reverse().push(0);
arr.unshift(6);
console.log(arr);

// Challenge 2
const num = [1, 2, 3, 4, 5];
const nums = [5, 6, 7, 8, 9, 10].splice(1, 5);
const totalnum = [...num, ...nums];
console.log(totalnum);
