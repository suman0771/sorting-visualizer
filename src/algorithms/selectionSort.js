export function getSelectionSteps(array){
    const arr=array.slice();
    const steps=[];
    for(let i=0;i<arr.length;i++){
        let minIndex=i;

        for(let j=i+1;j<arr.length;j++){
            //record comparision
            steps.push({
                type:"compare",
                i:minIndex,
                j:j,
            });

            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }

        //swap only if needed
        if(minIndex !== i){
            steps.push({
                type:"swap",
                i:i,
                j:minIndex,
            });

            const temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp;
        }
    }
    return steps;
}