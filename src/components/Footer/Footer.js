import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FaInstagramSquare } from 'react-icons/fa';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineFacebook } from 'react-icons/ai';
import FacebookIcon from '../../assets/icon-facebook.svg';
import PinterstIcon from '../../assets/icon-pinterest.svg';
import InstagramIcon from '../../assets/icon-instagram.svg';
import {
  footer,
  social,
  social__icons,
  social__icon,
} from './Footer.module.css';
import mountainSVG from '../../assets/pattern-hills.svg';

const Footer = () => {
  return (
    <Fragment>
      <div className={social}>
        <div className={social__icons}>
          <img
            className={social__icon}
            src={FacebookIcon}
            alt="Facebook Icon"
          ></img>
          <img
            className={social__icon}
            src={PinterstIcon}
            alt="Pinterest Icon"
          ></img>
          <img
            className={social__icon}
            src={InstagramIcon}
            alt="Instagram Icon"
          ></img>
        </div>
      </div>
      <div className={footer}>
        <img src={mountainSVG} alt="Nice dark mountains"></img>
      </div>
    </Fragment>
  );
};

Footer.propTypes = {};

export default Footer;
