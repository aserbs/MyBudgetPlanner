import React from 'react';
import { BsPencilFill } from "react-icons/bs";

const ViewBudget = (props) => {
    return (
        <>
            <span>Budget: {props.budget}$</span>
            <button><BsPencilFill onClick={props.handleEditClick}/></button> 
        </>
    )
}


export default ViewBudget;