import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaInstagramSquare } from 'react-icons/fa';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineFacebook } from 'react-icons/ai';
const SocialIcons = ({ socialIcon }) => {
  const [isHovering, setIsHovering] = useState(false);
  const socialIconsProps = {
    size: '30',
    color: isHovering ? 'hsl(345, 95%, 68%)' : 'lightgray',
    style: { marginLeft: '-35px', cursor: 'pointer' },
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
  };
  if (socialIcon === 'facebook') {
    return <AiOutlineFacebook {...socialIconsProps} />;
  }
  if (socialIcon === 'instagram') {
    return <FaInstagramSquare {...socialIconsProps} />;
  }
  if (socialIcon === 'pinterest') {
    return <ImPinterest2 {...socialIconsProps} />;
  }
};

SocialIcons.propTypes = {};

export default SocialIcons;
