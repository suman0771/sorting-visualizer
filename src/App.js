import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";//store array in memory
import Navbar from "./components/Navbar";
import ControlPanel from "./components/ControlPanel";
import ArrayVisualizer from "./components/ArrayVisualizer";
import { getBubbleSortSteps } from './algorithms/bubbleSort';
import { getSelectionSteps } from './algorithms/selectionSort';
import { getInsertionSortSteps } from './algorithms/insertionSort';


const PRIMARY_COLOR="blue";
const COMPARE_COLOR="red";

function App() {
  const [array,setArray]=useState([]); //array=current numbers, setArray=updates number

  const [speed, setSpeed]=useState(200);
  const [isSorting, setIsSorting]=useState(false);
  const [algorithm, setAlgorithm]=useState("bubble");

  //Generate Random array:
  const generateRandomArray=()=>{
    if(isSorting) return;
    const newArray=[];//temporary array
    for(let i=0;i<30;i++){
      newArray.push(Math.floor(Math.random()*100)+10);//random numbers between 10-109
    }
    setArray(newArray); //triggers re-render
  };
  const setCustomArray=(input)=>{
    //"5,3,8"-> ["5","3","8"]
    //Number()-> convert to numbers
    //filter -> remove invalid input
    const values=input
    .split(",") 
    .map((num)=> Number(num.trim()))
    .filter((num)=> !isNaN(num));

    setArray(values);
  };

  const runAnimation=(steps)=>{
    const bars=document.getElementsByClassName("array-bar");

    // for(let i=0;i<steps.length;i++){
    //   const step=steps[i];
    //   setTimeout(()=>{
    //     const { type, i:idx1,j:idx2 }=step;

    steps.forEach((step,index)=>{
      setTimeout(()=>{
        const {type,i,j}=step;
        if(!bars[i] || !bars[j])return;

        if(type === "compare"){
          bars[i].style.backgroundColor=COMPARE_COLOR;
          bars[j].style.backgroundColor=COMPARE_COLOR;

          setTimeout(()=>{
            bars[i].style.backgroundColor=PRIMARY_COLOR;
            bars[j].style.backgroundColor=PRIMARY_COLOR;
          },speed * 0.6);
        }
        if(type === "swap"){
          const temp=bars[i].style.height;
          bars[i].style.height=bars[j].style.height;
          bars[j].style.height=temp;
        }
      },index * speed);
    });

    setTimeout(()=>{
      setIsSorting(false);
    }, steps.length * speed);
  };

        // if(type=="compare"){
        //   bars[idx1].style.background=COMPARE_COLOR;
        //   bars[idx2].style.background=COMPARE_COLOR;

        //   setTimeout(()=>{
        //     bars[idx1].style.background=PRIMARY_COLOR;
        //   bars[idx2].style.background=PRIMARY_COLOR;
        //   },150);
        // }
  //       if(type=="swap"){
  //         const tempHeight=bars[idx1].style.height;
  //         bars[idx1].style.height=bars[idx2].style.height;
  //         bars[idx2].style.height=tempHeight;
  //       }
  //     },i*speed);
  //   }
  // };

  const handleBubbleSort=()=>{
    if(isSorting)return;

    setIsSorting(true);
    const steps=getBubbleSortSteps(array);
    // console.log("Bubble Sort Steps:",steps);
    runAnimation(steps);
  };

  const handleSort=()=>{
    if(isSorting)return;

    setIsSorting(true);
    let steps=[];
    if(algorithm === "bubble"){
      steps=getBubbleSortSteps(array);
    }else if(algorithm === "insertion"){
      steps=getInsertionSortSteps(array);
    }else{
      steps=getSelectionSteps(array);
    }
    runAnimation(steps);
  };


  return (
    <div>
        <ControlPanel
        onGenerate={generateRandomArray}
        onCustomInput={setCustomArray}
        onSort={handleSort}
        // onBubbleSort={handleBubbleSort}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        speed={speed}
        setSpeed={setSpeed}
        isSorting={isSorting}
        />

        <ArrayVisualizer array={array} />
    </div>
  );
}

export default App;
