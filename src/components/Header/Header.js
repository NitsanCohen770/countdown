import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { text, text__secondary } from './Header.module.css';
const Header = () => {
  return (
    <Fragment>
      <div className={text}>WE'RE LAUNCHING SOON</div>
    </Fragment>
  );
};
Header.propTypes = {};

export default Header;
