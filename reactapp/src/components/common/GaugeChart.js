import React, { useState, useEffect} from 'react';
import instance from '../../helpers/Request';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ButtonRefresh } from './';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function KpiGauge() {

  const [status, setStatus] = useState(0);
  const [goal, setGoal] = useState(100);

  var options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
      fetchData(); // Llamada inicial al montar el componente
  }, []);


const fetchData = () => {
    instance.get('getCurrentStatus')
        .then(response => {
        setStatus(response.data.statusActual);
        setGoal(response.data.statusExpected);
        })
        .catch(error => {
        console.error(error);
        });
}

function onHandleRefresh() {
    fetchData();
}


  var data = {
    labels: ["Meta Actual", "Meta Expected"],
    datasets: [
      {
        data: [status, goal],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="kpis-item cardMargin" >
      <div className="bg-light mx-auto px-2 border border-2 card cardKpi">
        <Doughnut data={data} options={options} />
        <ButtonRefresh onHandleClick={onHandleRefresh}/>
      </div>
    </div>    
  )
}