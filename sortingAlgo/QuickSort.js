function quickSort(arr,start,end){
    if(start>=end) return ;
    let pivotIndex = findPivotIndex(arr,start,end);
    quickSort(arr,start,pivotIndex-1);
    quickSort(arr,pivotIndex+1,end);
}

function findPivotIndex(arr,start,end){
    let pointerOne = start;
    let pivot = arr[end];
    for(let pointerTwo = start ; pointerTwo<=end-1;pointerTwo++)
    {
        if(arr[pointerTwo]<pivot)
        {
            swap(arr,pointerTwo,pointerOne);
            pointerOne++;
        }
    }
    swap(arr,end,pointerOne);
    return pointerOne;
}
function swap(arr,first,second){
    let temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
}

let arr = [5,3,32,1,22,335,90]
let start = 0
let end = arr.length-1
quickSort(arr,start,end)
console.log(arr)