import React, { useState, useEffect} from "react";
import instance from '../../helpers/Request';
import { Bar } from "react-chartjs-2";
import { ButtonRefresh } from './';



export default function KpiChart() {

  const [datos, setData] = useState([])
  const [prod, setProd] = useState([]);


  useEffect(() => {
      fetchData(); // Llamada inicial al montar el componente
  }, []);


  const fetchData = () => {
      instance.get('getFirstThreeProd')
          .then(response => {
          const [ productDataFirst, productDataSecon, productDataThree ] = response.data.productList
          setData([productDataFirst.name, productDataSecon.name, productDataThree.name]);
          setProd([productDataFirst.sells[0], productDataSecon.sells[0], productDataThree.sells[0]]);
          })
          .catch(error => {
          console.error(error);
          });
  }

  function onHandleRefresh() {
      fetchData();
  }

  var data = {
    labels: datos,
    datasets: [
      {
        label: "Valor",
        data: prod,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        barThickness: 10, // Ancho de las barras
      },
    ],
  };

  var options = {
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };


  return ( 
    <div className="kpis-item cardMargin" >
      <div className="bg-light mx-auto px-2 border border-2 card cardKpi">
        <Bar data={data} options={options} />
        <ButtonRefresh onHandleClick={onHandleRefresh}/>
      </div>
    </div>
  );
};