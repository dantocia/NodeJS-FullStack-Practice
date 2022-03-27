import React from "react";

const Total = ({parts }) => {
    console.log("test from total");
    return(
        <>
         <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
        </>
     
    )
    
}

export {Total}