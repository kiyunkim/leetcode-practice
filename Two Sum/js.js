// Given an array of integers `num` and an integer `target`,
// return indices of the two numbers such that they add up to `target`

// Assume that each input has only ONE solution,
// and cannot use the same element twice

// Ex. 1 -------- 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] ecause nums[0] + nums[1] == 9


var twoSum = function(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

// Test Cases:
// [2,7,11,15], 9
// [3,2,4], 6
// [3,3], 6