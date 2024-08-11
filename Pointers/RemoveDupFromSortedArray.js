var removeDuplicates = function(nums) {
    let pointerOne = 0 ;
    for (let pointerTwo = 1; pointerTwo<nums.length;pointerTwo++){
        if(nums[pointerOne]!=nums[pointerTwo])
        {
            pointerOne++;
            nums[pointerOne] = nums[pointerTwo]
        }
    }
    return pointerOne+1
};

let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))
console.log(nums)