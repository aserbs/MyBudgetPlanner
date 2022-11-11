import React, { useContext } from "react";
import { AppContext  } from "../contex/AppContex";

const Spent = () => {
    const { categories } = useContext(AppContext);
    const totalCategories = categories.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className="cont spent">
            <span>Spent: {totalCategories}$</span>
        </div>
    )
}


export default Spent;