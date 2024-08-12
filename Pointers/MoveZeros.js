/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 */

var moveZeroes = function(nums) {
    let firstP = 0;
    let secondP = 0;
    while(firstP<nums.length)
    {
        if(nums[firstP]==0)
        {
            firstP++
        }else
        {
            swap(nums,firstP++,secondP++)
        }
    }
}

var swap = function(nums,first,second){
    let temp = nums[first]
    nums[first] = nums[second]
    nums[second] = temp
}

let nums = [0,0,0,1]
moveZeroes(nums);
console.log(nums)