import React, { useEffect, useState } from 'react';
import instance from '../../helpers/Request';
import { ButtonRefresh } from './';

const TextKpi = ({title}) => {
  const [name, setName] = useState("Product 1");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetchData(); // Llamada inicial al montar el componente
  }, []);


  const fetchData = () => {
    instance.get('getBestSellers')
      .then(response => {
        setName(response.data.name)
        setQuantity(response.data.quantity);
        setPrice(response.data.price);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function onHandleRefresh() {
    fetchData();
}


  return (
    <div className="kpis-item cardMargin">
      <div className="bg-light mx-auto px-2 border border-2 card cardKpi" >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '12px',fontWeight: 'bold', margin: '0' }}>{title}</p>
            <p style={{ fontSize: '12px', margin: '0' }}>Cantidad: {quantity}</p>
            <p style={{ fontSize: '12px', margin: '0' }}>Ingresos: ${price}</p>
          </div>
          <div style={{ borderLeft: '1px solid #000', height: '90px', margin: '7px' }}></div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0' }}>Destacado</h2>
            <p style={{ fontSize: '14px', margin: '0' }}>{name}</p>
          </div>
        </div>
        <ButtonRefresh onHandleClick={onHandleRefresh}/>
      </div>
    </div>
  );
};

export default TextKpi;
