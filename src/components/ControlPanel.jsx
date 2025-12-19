import React from "react";
function ControlPanel({onGenerate, onCustomInput, onBubbleSort}){
    return (
        <div style={{padding:"10px"}}>
            <button onClick={onGenerate}>Generate Random Array</button>
            <button onClick={onBubbleSort} style={{marginLeft:"10px"}}>
                Bubble Sort
            </button>

            <input
            type="text" placeholder="Enter numbers like 5,3,8,1"
            style={{marginLeft:"10px"}}
            onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    onCustomInput(e.target.value);
                    e.target.value="";
                }
            }} />
        </div>
    );
}

export default ControlPanel;