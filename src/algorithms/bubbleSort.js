export function getBubbleSortSteps(array){
    const arr=array.slice(); //prevents mutationg React state
    const steps=[];//stores algo actions
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            steps.push({
                type:"compare",
                i:j,
                j:j+1,
            });
            if(arr[j]>arr[j+1]){
                steps.push({
                    type:"swap",
                    i:j,
                    j:j+1,
                });

                const temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return steps;
}


//These steps will be visible in Console
//click "Generate Random Array"
//Click "Bubble sort"
// opne "Console"
//step will be visible on console