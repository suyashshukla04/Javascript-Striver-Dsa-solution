function insertionSort(arr){
    for(let i=1;i<arr.length;i++)
    { 
        let j = i;
        while(j>0 && arr[j-1]>arr[j]){
            swap(arr,j,j-1)
            j--;
        }
      
    }
    return arr
}

function swap(arr,first,second)
{
  let temp = arr[first]
  arr[first] = arr[second]
  arr[second] = temp
}

let arr = [5,3,32,1,22,335,90]
let result = insertionSort(arr)
console.log(result)