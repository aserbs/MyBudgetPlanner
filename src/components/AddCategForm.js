import React, { useState, useContext } from "react";
import { HiPlus } from "react-icons/hi";
import { AppContext } from "../contex/AppContex";
import { v4 as uuidv4 } from 'uuid'

const AddCategForm = (props) => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [color, setColor] = useState('#ffffff')

    // let elem = document.getElementsByClassName('AddCategForm');

    const onSubmit = (event) => {
        event.preventDefault();

        const category = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
            color: color,
        };

        dispatch({
            type: 'ADD_CATEGORY',
            payload: category,
        });

        props.onClick(event.target.value)

        // elem[0].style.animationDirection = "reverse";

    }

    return (
        <div className="AddCategForm" id="#addcat">
            <form>
                <h4>Add category</h4>
                <div className="inputFlex">
                    <input
                        type='text'
                        id="name"
                        value={name}
                        placeholder="type name of category..."
                        onChange={(event) => setName(event.target.value)}    
                    />
                
                    <input
                        type='text'
                        id="cost"
                        value={cost}
                        placeholder="type cost of category..."
                        onChange={(event) => setCost(event.target.value)}    
                    />
                    <input 
                        type='color' 
                        id="color"
                        value={color}
                        onChange={(event) => setColor(event.target.value)}
                        title='choose color of category'
                    />
                    <span>choose color</span>
                </div>
                
            </form>
            <HiPlus className="plusIcon" onClick={onSubmit} size={'20px'}/>
        </div>
    );
};

export default AddCategForm;