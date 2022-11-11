import React, {useContext, useState, useEffect} from "react";
import CategoryItem from "./CategoryItem";
import { AppContext } from "../contex/AppContex";

const CategoriesList = () => {
    const {categories} = useContext(AppContext);

    const [filteredCategories, setFilteredCategories] = useState([])
    const [isFiltering, setFiltering] = useState(false);

    const [data, setData] = useState([]);
    

    useEffect(() => {
        setFilteredCategories(categories);
        setData(categories)
    }, [categories]);

    const handleChange = (event) => {
		const searchResults = categories.filter((category) => category.name.toLowerCase() === event.target.value);
        if(searchResults.length > 0) {
            setFiltering(true);
            setFilteredCategories(searchResults);
        } else {
            setFiltering(false);
        }
	};
   
    return (
        <>
            <div>
                <input 
                    type='text'
                    className="category_search"
                    placeholder='Type to search a category...'
                    onChange={handleChange}
                />
            </div>
            
            <ul className="categories_list">
                { isFiltering ?
                     filteredCategories.map((category) => (
                        <CategoryItem 
                            key={category.id}
                            id={category.id}
                            name={category.name} 
                            cost={category.cost}
                            color={category.color}
                        />))
                     :
                     categories.map((category) => (
                        <CategoryItem 
                            key={category.id}
                            id={category.id}
                            name={category.name} 
                            cost={category.cost}
                            color={category.color}
                        />))
                    
                }
            </ul>
        </>
    );
};

export default CategoriesList

