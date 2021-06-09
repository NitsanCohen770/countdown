import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import CountdownCard from '../CountdownCard/CountdownCard';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <CountdownCard />
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {};

export default Layout;
