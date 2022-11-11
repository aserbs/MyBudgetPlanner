import React, { useContext } from "react";
import { AppContext } from "../contex/AppContex";


const Remain = () => { 
    const { categories, budget } = useContext(AppContext);
    const totalCategories = categories.reduce((total, item) => {
        return(total = total + item.cost);
    }, 0)

    const remainType = totalCategories > budget ? 'remain-notEnough' : 'remain-enough ';


    return (
        <div className={`cont ${remainType}`}>
            <span>Remain: {budget - totalCategories}$</span>
        </div>
    )
}

export default Remain;