import React from 'react';
import PropTypes from 'prop-types';

import './result.scss';

const Result = ({ amount }) => (
  <div className="amount">
    <p className="amount-value">{amount}</p>
    <p className="amount-currency">United States Dollar</p>
  </div>
);

Result.propTypes = {
  amount: PropTypes.number.isRequired,
};
export default Result;
