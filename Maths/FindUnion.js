/**
 * Given two sorted arrays of size n and m respectively, find their union. The Union of two arrays can be defined as the common and distinct elements in the two arrays. Return the elements in sorted order.

Example 1:

Input: 
n = 5, arr1[] = {1, 2, 3, 4, 5}  
m = 5, arr2 [] = {1, 2, 3, 6, 7}
Output: 
1 2 3 4 5 6 7
Explanation: 
Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
 */

var findUnion = function(arr1,arr2){
    let firstPointer = 0;
    let secondPointer = 0;
    let result = [];
    while(firstPointer<arr1.length && secondPointer<arr2.length)
    {
        if(arr1[firstPointer]<=arr2[secondPointer])
        {
            if(arr1[firstPointer]!=result[result.length-1])
            {
                result.push(arr1[firstPointer])
            }
            firstPointer++;
        }
        else{
            if(result.length == 0 || arr2[secondPointer]!=result[result.length-1])
            {
                result.push(arr2[secondPointer])
            }
            secondPointer++;
        }
    }
    while(firstPointer<arr1.length)
    {
        if(result.length == 0 || arr1[firstPointer]!=result[result.length-1]){
           result.push(arr1[firstPointer])
        }
        firstPointer++;
    }
    while(secondPointer<arr2.length){
        if(result.length==0 || arr1[firstPointer]!=result[result.length-1])
        {
            result.push(arr2[secondPointer])
        }
        secondPointer++;
    }
    return result
}

let nums1 = [1,2,3,4,5]
let nums2 = [1,2,3,6,7]
let result = findUnion(nums1,nums2);
console.log(result)