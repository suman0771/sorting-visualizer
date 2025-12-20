import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";//store array in memory
import Navbar from "./components/Navbar";
import ControlPanel from "./components/ControlPanel";
import ArrayVisualizer from "./components/ArrayVisualizer";
import { getBubbleSortSteps } from './algorithms/bubbleSort';

const PRIMARY_COLOR="blue";
const COMPARE_COLOR="red";

function App() {
  const [array,setArray]=useState([]); //array=current numbers, setArray=updates number
  const generateRandomArray=()=>{
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

  const animateSteps=(steps)=>{
    const bars=document.getElementsByClassName("array-bar");

    for(let i=0;i<steps.length;i++){
      const step=steps[i];
      setTimeout(()=>{
        const { type, i:idx1,j:idx2 }=step;

        if(type=="compare"){
          bars[idx1].style.background=COMPARE_COLOR;
          bars[idx2].style.background=COMPARE_COLOR;

          setTimeout(()=>{
            bars[idx1].style.background=PRIMARY_COLOR;
          bars[idx2].style.background=PRIMARY_COLOR;
          },150);
        }
        if(type=="swap"){
          const tempHeight=bars[idx1].style.height;
          bars[idx1].style.height=bars[idx2].style.height;
          bars[idx2].style.height=tempHeight;
        }
      },i*200);
    }
  };

  const handleBubbleSort=()=>{
    const steps=getBubbleSortSteps(array);
    // console.log("Bubble Sort Steps:",steps);
    animateSteps(steps);
  };

  return (
    <div>
        <ControlPanel
        onGenerate={generateRandomArray}
        onCustomInput={setCustomArray}
        onBubbleSort={handleBubbleSort}
        />

        <ArrayVisualizer array={array} />
    </div>
  );
}

export default App;
