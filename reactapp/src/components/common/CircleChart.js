import React, { useState, useEffect } from 'react';
import instance from '../../helpers/Request.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ButtonRefresh } from './';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function CircleChart() {
    const [ranges, setRanges] = useState([]);
    const [percent, setPercent] = useState([]);

    useEffect(() => {
        fetchData(); // Llamada inicial al montar el componente
    }, []);
    
    
    const fetchData = () => {
        instance.get('getAgePublicReached')
            .then(response => {
            const ageRangeList = response.data.ageRangeList;
            const newRanges = ageRangeList.map(item => item.range);
            const newPercent = ageRangeList.map(item => item.percent);
            setRanges(newRanges);
            setPercent(newPercent);
            })
            .catch(error => {
            console.error(error);
            });
    }
    
    function onHandleRefresh() {
        fetchData();
    }
    

    var opt = {
        responsive: true,
        maintainAspectRatio: false,
    };

    var dat = {
        labels: ranges,
        datasets: [
            {
                label: "% de Rangos Etarios",
                data: percent,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className="col-md-6 cardMargin">
            <div className="bg-light mx-auto px-2 border border-2 card cardChart">
                <Pie data={dat} options={opt} />
                <ButtonRefresh onHandleClick={onHandleRefresh}/>
            </div>
        </div>
    ) 
}