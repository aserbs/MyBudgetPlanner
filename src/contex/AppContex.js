import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';


const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.payload],
            };
        case 'DELETE_CATEGORY':
            return {
                ...state,
                categories: state.categories.filter((category) => 
                    category.id !== action.payload )
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        default:
            return state;
    }
}

const initialState = {
    budget: 5000,
    categories: [
        {id: uuidv4(), name: 'shopping', cost: 32, color: '#7cf2af',},
        {id: uuidv4(), name: 'holiday', cost: 41, color: '#a5edf2'},
        {id: uuidv4(), name: 'car', cost: 11, color: '#f7f7a1' },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider value={{
                budget: state.budget,
                categories: state.categories,
                dispatch,
            }}>
                {props.children}
        </AppContext.Provider>)
}


