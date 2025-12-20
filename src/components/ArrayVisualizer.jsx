import React from "react";
function ArrayVisualizer({array}){
    return(
        <div
        style={{
            display:"flex",
            alignItems:"flex-end",
            height:"300px",
            margin:"20px",
        }}
        > 
          {array.map((value,index)=>(
            <div 
            key={index}
            className="array-bar"
            style={{
                height:`${value * 2}px`,
                width:"20px",
                margin:"0 2px",
                background:"blue",
            }}
            >
            </div>
          ))}  
        </div>
        
    );
}

export default ArrayVisualizer;