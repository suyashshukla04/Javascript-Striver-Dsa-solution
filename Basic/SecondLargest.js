
function findSecondLargest(arr)
{
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i=1;i<arr.length;i++)
  {
    if(arr[i]>largest) 
    {
      secondLargest = largest
      largest = arr[i]
    }
    if(arr[i]>secondLargest && arr[i]!=largest)
    {
        secondLargest = arr[i]
    }
  }
return secondLargest
}

let arr = [1,2,3,33,22,5];

console.log(findSecondLargest(arr))