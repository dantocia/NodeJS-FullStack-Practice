import React from "react";

const Header = ({course}) => {
    console.log("test from header");
    console.log(course);
    return(
        <>
        <h1>{course.name}</h1>
        </>
    )
    
}

export {Header}