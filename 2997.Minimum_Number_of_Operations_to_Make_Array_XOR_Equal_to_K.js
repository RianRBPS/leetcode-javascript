// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/

var minOperations = function(nums, k) {
    return (nums.reduce((acc, cur) => acc ^ cur, 0) ^ k).toString(2).split('1').length - 1;
};
