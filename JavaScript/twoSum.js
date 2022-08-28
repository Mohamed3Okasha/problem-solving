/**
 * Link on leetcode, https://leetcode.com/problems/two-sum/
 */

//brute force
let nums = [2,7,11,15];
let target = 13;

let twoSum = (nums, target)=> {
    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}

console.log(twoSum(nums, target));

//one-pass hash table
let twoSumHash = function(nums, target){
    const indices = new Map();

    for(let i = 0; i < nums.length; i++){
        const complment = target - nums[i];

        if(indices.has(complment)){
            return [indices.get(complment), i];
        }

        indices.set(nums[i], i);
    }
}

console.log(twoSumHash(nums, target));
