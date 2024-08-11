
function findLargestElement(arr){
    let largest = -Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            largest = arr[i]
        }
    }
    return largest
}

let arr = [1,2,3,33,22,5];

console.log(findLargestElement(arr))