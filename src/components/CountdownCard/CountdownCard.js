import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './CountdownCard.scss';
const CountdownCard = () => {
  return (
    <div className="box">
      {' '}
      <div className="grid">
        <div className="twocolordiv">4</div>
        <div className="text">DAYS</div>
        <div className="twocolordiv" style={{ marginRight: '20px' }}>
          44
        </div>
        <div className="text">HOURS</div>
        <div className="twocolordiv">44</div>
        <div className="text">MINUTES</div>{' '}
        <div className="twocolordiv">44</div>
        <div className="text">SECONDS</div>{' '}
      </div>
    </div>
  );
};

CountdownCard.propTypes = {};

export default CountdownCard;
