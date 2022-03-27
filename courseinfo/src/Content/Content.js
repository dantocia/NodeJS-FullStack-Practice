import React from "react";
import { Part } from "./Part";

const Content = ({parts }) => {
    console.log("test from content");
    return(
        <>
     <Part part = {parts[0]} /> 
     <Part part = {parts[1]} /> 
     <Part part = {parts[2]} />        
     
        </>
     
    )
    
}

export {Content}