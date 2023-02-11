import './clientsCard.scss';
import React, { useState } from 'react';

export const ClientCard = ({ name, job, number, email, country }) => {
  const [button, setButton] = useState('Active');
  const [color, setColor] = useState(false);

  let classNames = 'clients__button-active';
  if (color) {
    classNames += ' clients__button-inactive';
  }

  const hanleClick = () => {
    if (!color) {
      setButton('Inactive');
    } else {
      setButton('Active');
    }
    setColor((prevColor) => !prevColor);
  };

  return (
    <div className="clients">
      <div className="clients__info">
        <p className="clients__info-name">{name}</p>
        <p className="clients__info-job">{job}</p>
        <p className="clients__info-number">{number}</p>
        <p className="clients__info-email">{email}</p>
      </div>
      <div className="clients__info-second">
        <p className="clients__info-country">{country}</p>
        <button onClick={hanleClick} className={classNames}>
          {button}
        </button>
      </div>
    </div>
  );
};
