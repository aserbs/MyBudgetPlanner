import React, { useState } from "react";
import { HiOutlineSave } from 'react-icons/hi';

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);

    return (
        <div className="editBudget">
            <input 
                required='required'
                type='number'
                id='name'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={() => props.handleSaveClick(value)}><HiOutlineSave size={'18px'}/></button>
        </div>
    )
}


export default EditBudget;