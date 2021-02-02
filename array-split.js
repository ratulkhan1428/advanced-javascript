const nums = [12, 41, 21, 32, 19];
// const part = nums.slice(1, 4);

const removed = nums.splice(1, 2, 61, 80); 
// console.log(removed);
// console.log(nums);

const together = nums.join(", ");
console.log(together);