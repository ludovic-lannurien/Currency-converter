import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({ baseAmount }) => (
  <header className="header">
    <div className="header-content">
      <h1 className="header-title">Converter</h1>
      <p className="header-info"> {baseAmount} euro </p>
    </div>
  </header>
);
Title.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};
export default Title;
