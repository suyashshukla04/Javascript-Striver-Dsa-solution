
/**
 * Using three loops you can get all Subarrays
 */


function getAllSubarray(nums)
{
    let result = [];
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i;j<nums.length;j++)
        {
            let subarray = []
            for(let k=i;k<=j;k++)
            {
               subarray.push(k)
            }
            result.push(subarray)
        }
    }
    return result;
}

let nums = [1,2,3,4,5];
let result =  getAllSubarray(nums);
console.log(result)