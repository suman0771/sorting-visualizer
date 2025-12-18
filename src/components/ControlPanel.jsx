import React from "react";
function ControlPanel({onGenerate, onCustomInput}){
    return (
        <div style={{padding:"10px"}}>
            <button onClick={onGenerate}>Generate Random Array</button>

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