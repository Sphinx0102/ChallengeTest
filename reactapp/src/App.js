import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
  LinesChart,
  BarChart,
  KpiChart,
  KpiGauge,
  TextKpi,
  HBarChart,
  CircleChart,
} from './components/common';
import './App.css';

export default function App() {
    return (
      <div>
        <div className="col-lg-12">
            <div className='text'>
                <h5>
                    ¡Bienvenido al Dashboard!
                </h5>
                <p>
                    Este dashboard muestra información detallada de las ventas anuales. Podrás encontrar gráficos, indicadores clave de rendimiento (KPIs) y más. Explora los datos y obtén insights valiosos para la toma de decisiones.
                </p>
            </div>   
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-3">
              <div className='kpis-container'>
                <KpiChart/>
                <TextKpi title={"Producto mas Vendido"}/>
                <KpiGauge />
                <TextKpi title={"Producto mas Popular"}/>
              </div>
            </div>
            <div className="col-md-12 col-lg-9">
              <div className="row">
                <LinesChart />
                <BarChart />
                <CircleChart />
                <HBarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  