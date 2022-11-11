import React, {useState} from 'react';
import './App.css';
import Budget from './components/Budget.js';
import Remain from './components/Remain';
import Spent from './components/Spent';
import CategoriesList from './components/CategoriesList';
import AddCategForm from './components/AddCategForm';
import {HiPlus} from "react-icons/hi";
import {AppProvider} from './contex/AppContex.js';
import Diagram from './components/Diagram';
// import DonutDiagram from './components/DonutDiagram';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleAddCategForm = () => {
    setShowForm(true)
  };
 
  return (
    <AppProvider>
        <div className='container'>
        <h1>MyBudgetPlanner</h1>
          <div className='header'>
            <Budget />
            <Remain />
            <Spent />
          </div>
        <div className='categories'>
          <div>
            <div className='categor_header'>
              <h2>Categories</h2>
              <HiPlus 
                onClick={handleAddCategForm} 
                className="plusIcon" 
                size={'20px'} 
                title={'add category'}
              />
              {/* <button>Diagram</button> */}
            </div>
            
          </div>
          
            {showForm ? <AddCategForm onClick={(value) => setShowForm(false)} /> : null}

          <CategoriesList />
          {/* <Diagram /> */}
        </div>
        
        </div>
    </AppProvider>
  );
}

export default App;
