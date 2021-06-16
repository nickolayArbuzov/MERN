import React from "react";
import s from "./Input.module.css";

export const Input = (props) => {
    return (
        <input onChange={(e) => props.setValue(e.target.value)} 
                value={props.value} 
                type={props.type} 
                placeholder={props.placeholder} />
    );
}