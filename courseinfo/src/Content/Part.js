import React from "react";

const Part = ({part}) => {
    console.log("test from part");
    return(
        <>
     <p>
        {part.name} {part.exercises}
     </p>
    
        </>
     
    )
    
}

export {Part}