import React, { useState, useEffect } from 'react';
import instance from '../../helpers/Request';
import { ButtonRefresh } from './';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function HBarChart() {
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [productDataFirst, setDataP]  = useState([]);
  const [productDataSecond, setDataS] = useState([]);


  useEffect(() => {
      fetchData(); // Llamada inicial al montar el componente
  }, []);


  const fetchData = () => {
      instance.get('getLastTwoProd')
          .then(response => {
            const [ productDataFirst, productDataSecond ] = response.data.productList;
            setDataP(productDataFirst);
            setDataS(productDataSecond);
          })
          .catch(error => {
          console.error(error);
          });
  }

  function onHandleRefresh() {
      fetchData();
  }

  var data = {
    labels,
    datasets: [
      {
        label: productDataFirst.name,
        data: productDataFirst.sells,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132)',
      },
      {
        label: productDataSecond.name,
        data: productDataSecond.sells,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235)',
      },
    ],
  }

  var options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Comparativa Venta Mejores Productos',
      },
    },
  };

  return (
    <div className="col-md-6 cardMargin">
      <div className="bg-light mx-auto px-2 border border-2 card cardChart">
          <Bar options={options} data={data} />
          <ButtonRefresh onHandleClick={onHandleRefresh}/>
      </div>
    </div>
  )
}