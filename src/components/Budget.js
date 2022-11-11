import React, { useContext, useState } from "react";
import { AppContext } from "../contex/AppContex";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {
    const {budget, dispatch} = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEditing(false)
    }

    return (
        <div className="cont budget">
            {isEditing ? (
                    <EditBudget handleSaveClick={handleSaveClick} budget={budget}/>
                ) : (
                    <ViewBudget handleEditClick={handleEditClick} budget={budget}/>
                )}
        </div>
    )
}


export default Budget;