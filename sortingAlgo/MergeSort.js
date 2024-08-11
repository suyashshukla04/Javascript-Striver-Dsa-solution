function mergeSort(arr,start,end){
    if(start>=end) return ;
    var mid = Math.floor((end-start)/2) + start
    mergeSort(arr,start,mid);
    mergeSort(arr,mid+1,end)
    merge(arr,start,mid,end)
}

function merge(arr,start,mid,end){
    let tempArr = new Array(arr.length)
    let tempIndex = start;
    let lstart = start;
    let rstart = mid+1;

    console.log(arr)
    while(lstart<=mid && rstart<=end)
    {
        if(arr[lstart]<arr[rstart])
        {
          tempArr[tempIndex++] = arr[lstart++]
        }
        else 
        {
            tempArr[tempIndex++] = arr[rstart++]
        }
    }
    while(lstart<=mid){
        tempArr[tempIndex++] = arr[lstart++]
    }
    while(rstart<=end){
        tempArr[tempIndex++] = arr[rstart++]
    }
    for(let i=start;i<=end;i++){
        arr[i]=tempArr[i]
    }
}

let arr = [5,3,32,1,22,335,90]
let start = 0
let end = arr.length-1
mergeSort(arr,start,end)
console.log(arr)