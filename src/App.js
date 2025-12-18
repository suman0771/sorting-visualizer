import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";//store array in memory
import Navbar from "./components/Navbar";
import ControlPanel from "./components/ControlPanel";
import ArrayVisualizer from "./components/ArrayVisualizer";


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

  return (
    <div>
        <ControlPanel
        onGenerate={generateRandomArray}
        onCustomInput={setCustomArray}
        />

        <ArrayVisualizer array={array} />
    </div>
  );
}

export default App;
