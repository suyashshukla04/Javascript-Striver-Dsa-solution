
function BubbleSort(arr)
{
   for(let i=1;i<arr.length;i++)
    {
    for(let j=0;j<arr.length-1;j++)
    {
       if(arr[j]>arr[j+1]){
        swap(arr,j,j+1)
       }
    }
   }
   return arr
}
function swap(arr,first,second){
    let temp = arr[first]
    arr[first]=arr[second]
    arr[second]=temp
}

let arr = [5,3,32,1,22,335,90]
let result = BubbleSort(arr)
console.log(result)