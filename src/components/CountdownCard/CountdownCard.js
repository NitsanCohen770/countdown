import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './CountdownCard.scss';
const CountdownCard = () => {
  const counterEndDate = new Date(2021, 7, 1, 10, 33, 30, 0);
  const timeDifferences =
    (counterEndDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24);
  const hoursLeft = (timeDifferences % 1) * 24;
  const minutesLeft = (timeDifferences % 1) * 60;
  const secondsLeft = (timeDifferences % 1) * 60;

  const [days, setDays] = useState(Math.trunc(timeDifferences));
  const [hours, setHours] = useState(Math.trunc(hoursLeft));
  const [minutes, setMinutes] = useState(Math.trunc(minutesLeft));
  const [seconds, setSeconds] = useState(Math.trunc(secondsLeft));

  setInterval(() => {
    const counterEndDatea = new Date(2021, 7, 1, 10, 33, 30, 0);
    const timeDifferencesa =
      (counterEndDatea.getTime() - new Date().getTime()) / (1000 * 3600 * 24);
    const hoursLefta = (timeDifferencesa % 1) * 24;
    const minutesLefta = (hoursLefta % 1) * 60;
    const secondsLefta = (minutesLefta % 1) * 60;
    console.log(secondsLefta);
    setDays(Math.trunc(timeDifferencesa));
    setHours(Math.trunc(hoursLefta));
    setMinutes(Math.trunc(minutesLefta));
    setSeconds(Math.trunc(secondsLefta));
  }, 1000);

  return (
    <div className="box">
      {' '}
      <div className="grid">
        <div className="card">{days}</div>
        <div className="text">DAYS</div>
        <div className="card" style={{ marginRight: '20px' }}>
          {hours}
        </div>
        <div className="text">HOURS</div>
        <div className="card">{minutes}</div>
        <div className="text">MINUTES</div>{' '}
        <div className="card">{seconds}</div>
        <div className="text">SECONDS</div>{' '}
      </div>
    </div>
  );
};

CountdownCard.propTypes = {};

export default CountdownCard;
