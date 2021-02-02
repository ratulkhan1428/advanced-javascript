const nums = [4, 6, -7, 9, -16, 19, -23];

for (let i = 0; i < nums.length; i++) {  
    if (nums[i] > 16) {
        break;
    }
    // console.log(nums[i]);
}

for (let i = 0; i < nums.length; i++) {  
    if (nums[i] < 0) {
        continue;
    }
    console.log(nums[i]);
}