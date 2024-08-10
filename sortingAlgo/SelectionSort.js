function selectionSort(arr)
{
    for(let i=0;i<arr.length-1;i++) // if i=0 then it will go till arr.length if i=1 then it will go till arr.length-1
    {
        let iMin = i
      for(let j=i+1;j<arr.length;j++)
    {
        if(arr[j]<arr[iMin])
        {
            iMin = j
        }
    }
    if(iMin!= i)
    {
        swap(arr,i,iMin)
    }
    }
    return arr
}
function swap(arr,first,second)
{
    let temp = arr[first]
    arr[first]=arr[second]
    arr[second]=temp
}
let arr = [5,3,32,1,22,335,90]
let result = selectionSort(arr)
console.log(result)
