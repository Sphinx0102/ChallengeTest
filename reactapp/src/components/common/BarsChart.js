import React, { useState, useEffect} from 'react';
import instance from '../../helpers/Request';
import { Bar } from "react-chartjs-2";
import { ButtonRefresh } from './';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);




export default function BarChart() {

    const [Sells, setSells] = useState([0, 94, 45, 70, 86, 23, 89, 1, 55, 5, 65, 80]);
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


    useEffect(() => {
        fetchData(); // Llamada inicial al montar el componente
    }, []);
    
    
    const fetchData = () => {
        instance.get('getBestSellerMont')
            .then(response => {
            setSells(response.data.sells)
            })
            .catch(error => {
            console.error(error);
            });
    }
    
    function onHandleRefresh() {
        fetchData();
    }
    
    var dat = {
        labels: meses,
        datasets: [ // Cada una de las líneas del gráfico
            {
                label: 'Producto 1',
                data: Sells,
                borderColor: 'rgba(0, 0, 0,1)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
        ],
    };

    var opt = {
        responsive: true,
        animation: true,
        plugin: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max: 100
            },
            x: {
                ticks: { color: 'rgba(0, 0, 0)' }
            }
        }
    };


    return (
        <div className="col-md-6 cardMargin">
            <div className="bg-light mx-auto px-2 border border-2 card cardChart">
                <Bar data={dat} options={opt} />
                <ButtonRefresh onHandleClick={onHandleRefresh}/>
            </div>
        </div>
    )
}