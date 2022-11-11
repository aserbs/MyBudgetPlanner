import React, { useContext } from "react";
import {MdDelete} from "react-icons/md";
import { AppContext } from "../contex/AppContex";

const CategoryItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteCategory = () => {
        dispatch({
            type: 'DELETE_CATEGORY',
            payload: props.id,
        });
    };

    return (
        <li className="category_item" style={{backgroundColor: `${props.color}`}}>
            {props.name}
            <div>
                <span>
                    {props.cost}$
                </span>
                <MdDelete className="deleteIco" onClick={handleDeleteCategory}/>
            </div>
        </li>
    )
}

export default CategoryItem