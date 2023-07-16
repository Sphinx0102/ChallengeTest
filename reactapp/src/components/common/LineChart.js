import React, { useState, useEffect} from 'react';
import instance from '../../helpers/Request';
import { Line } from 'react-chartjs-2';
import { ButtonRefresh } from './';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function LinesChart() {
    const [datos, setDatos] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    useEffect(() => {
        fetchData(); // Llamada inicial al montar el componente
    }, []);
    
    
    const fetchData = () => {
        instance.get('GetTotalSellers')
            .then(response => {
            const { quantity, totalPrice } = response.data;
            setDatos(quantity)
            setTotalPrice(totalPrice);
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
        datasets: [
            {
                label: `Monto Recaudado: $${totalPrice}`,
                data: datos,
                tension: 0.5,
                fill: true,
                borderColor: 'rgba(50, 130, 50)',
                backgroundColor: 'rgba(50, 130, 50, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(50, 130, 50)',
                pointBackgroundColor: 'rgba(50, 130, 50)',
            },
        ],
    }

    var opt = {
        scales: {
            x: {
                ticks: { color: 'rgb(50, 130, 50)' },
            },
        },
    };

    return (
        <div className="col-md-6 cardMargin">
            <div className="bg-light mx-auto px-2 border border-2 card cardChart">
                <Line data={dat} options={opt} />
                <ButtonRefresh onHandleClick={onHandleRefresh}/>
            </div>
        </div>
    );
}
