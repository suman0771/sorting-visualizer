import React from "react";
function ControlPanel({onGenerate, 
    onCustomInput, 
    onSort,
    algorithm,
    setAlgorithm,
    speed,
    setSpeed,
    isSorting}){
    return (
        <div style={{padding:"10px"}}>
            <button onClick={onGenerate} disabled={isSorting}>Generate Random Array</button>

            <select
            value={algorithm}
            disabled={isSorting}
            onChange={(e)=>setAlgorithm(e.target.value)}
            >
                <option value="bubble">Bubble Sort</option>
                <option value="insertion">Insertion Sort</option>
                <option value="selection">Selection Sort</option>
                <option value="merge">Merge Sort</option>
            </select>

            <input
            type="range" 
            min="50"
            max="1500"
            step="50"
            value={speed}
            disabled={isSorting}
            onChange={(e)=>setSpeed(Number(e.target.value))}
            // placeholder="Enter numbers like 5,3,8,1"
            // style={{marginLeft:"10px"}}
            // onKeyDown={(e)=>{
            //     if(e.key==="Enter"){
            //         onCustomInput(e.target.value);
            //         e.target.value="";
            //     }
            // }} 
            />
            <span style={{marginLeft:"10px"}}>
                Speed:{speed} ms
            </span>
            {/* <button onClick={onBubbleSort} disabled={isSorting} style={{marginLeft:"10px"}}>
                Bubble Sort
            </button>
            <button onClick={onInsertionSort} disabled={isSorting}>
                Insertion Sort
            </button> */}

                <button onClick={onSort} disabled={isSorting}>Start Sorting</button>


        </div>
    );
}

export default ControlPanel;