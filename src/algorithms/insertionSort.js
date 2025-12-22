export function getInsertionSortSteps(array){
    const arr=array.slice();
    const steps=[];
    for(let i=1;i<arr.length;i++){
        let j=i;
        while(j>0){
            steps.push({
                type:"compare",
                i:j-1,
                j:j,
            });
            if(arr[j-1]>arr[j]){
                steps.push({
                    type:"swap",
                    i:j-1,
                    j:j,
                });

                const temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;

                j--;
            }else{
                break;
            }
        }
    }
    return steps;
}