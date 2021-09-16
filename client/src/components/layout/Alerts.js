import React, { useContext } from 'react';
import AlertContext from '../../context/Snippet/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div
        key={alert.id}
        className='container mx-auto max-w-screen-l p-3 bg-red-600 rounded-lg mb-3 text-center text-2xl text-white'
      >
        <i className='fas fa-info circle'> {alert.msg}</i>
      </div>
    ))
  );
};

export default Alerts;
