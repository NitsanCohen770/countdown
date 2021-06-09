import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { FaInstagramSquare } from 'react-icons/fa';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineFacebook } from 'react-icons/ai';
import SocialIcons from '../SocialIcons/SocialIcons';
import {
  footer,
  social,
  social__icons,
  social__icon,
} from './Footer.module.css';
import mountainSVG from '../../assets/pattern-hills.svg';

const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);
  const socialIconsList = ['facebook', 'pinterest', 'instagram'];
  return (
    <Fragment>
      <div className={social}>
        <div className={social__icons}>
          {socialIconsList.map(socialIcon => (
            <SocialIcons socialIcon={socialIcon} />
          ))}
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
