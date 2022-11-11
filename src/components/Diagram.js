import React, { useContext } from 'react';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';
import { AppContext } from '../contex/AppContex';

const Diagram = () => {
    const {categories} = useContext(AppContext);

    const options = {
        chart: {
            type: 'pie',
        },
        title: {
            text: '% of wasted budg'
        },
        

        series: [
            {
                data: [
                    {
                        name: categories.name,
                        y: categories.cost
                    }
                    
                ]
            }
        ]
    }


    return (
        <div>
            <PieChart highcharts={Highcharts} options={options}/>
        </div>
    );
}

export default Diagram;