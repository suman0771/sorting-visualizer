function merge(arr,left,mid,right,steps){
    const temp=[];
    let i=left;
    let j=mid+1;

    while(i<=mid && j<=right){
        steps.push({
            type:"compare",
            i,
            j,
        });

        if(arr[i]<=arr[j]){
            temp.push(arr[i++]);
        }else{
            temp.push(arr[j++]);
        }
    }
    while(i<=mid)temp.push(arr[i++]);
    while(j<=right)temp.push(arr[j++]);

    //overwrite original array
    for(let k=left;k<=right;k++){
        steps.push({
            type:"overwrite",
            index:k,
            value:temp[k-left],
        });
        arr[k]=temp[k-left];
    }
}
function mergeSortHelper(arr,left,right,steps){
    if(left>=right)return;
    const mid=Math.floor((left+right)/2);

    mergeSortHelper(arr,left,mid,steps);
    mergeSortHelper(arr,mid+1,right,steps);
    merge(arr,left,mid,right,steps);
}
export function getMergeSortSteps(array){
    const arr=array.slice();
    const steps=[];
    mergeSortHelper(arr,0,arr.length-1,steps);
    return steps;
}