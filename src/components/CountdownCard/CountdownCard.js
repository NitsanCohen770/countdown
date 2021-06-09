import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './CountdownCard.scss';

const CountdownCard = () => {
  const counterEndDate = new Date(2021, 8, -20, -1, -63, 1, 0);
  const timeDifferences =
    (counterEndDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24);
  const hoursLeft = (timeDifferences % 1) * 24;
  const minutesLeft = (timeDifferences % 1) * 60;
  const secondsLeft = (timeDifferences % 1) * 60;

  const [days, setDays] = useState(Math.trunc(timeDifferences));
  const [hours, setHours] = useState(Math.trunc(hoursLeft));
  const [minutes, setMinutes] = useState(Math.trunc(minutesLeft));
  const [seconds, setSeconds] = useState(Math.trunc(secondsLeft));

  const countdownInterval = setInterval(() => {
    const counterEndDateCurrent = new Date(2021, 8, -20, -1, -63, 1, 0);
    const timeDifferencesCurrent =
      (counterEndDateCurrent.getTime() - new Date().getTime()) /
      (1000 * 3600 * 24);
    const hoursLeftCurrent = (timeDifferencesCurrent % 1) * 24;
    const minutesLeftCurrent = (hoursLeftCurrent % 1) * 60;
    const secondsLeftCurrent = (minutesLeftCurrent % 1) * 60;
    setDays(Math.trunc(timeDifferencesCurrent));
    setHours(Math.trunc(hoursLeftCurrent));
    setMinutes(Math.trunc(minutesLeftCurrent));
    setSeconds(Math.trunc(secondsLeftCurrent));
  }, 1000);
  timeDifferences <= 0 && clearInterval(countdownInterval);

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
