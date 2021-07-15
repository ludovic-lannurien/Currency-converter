import React from 'react';
import PropTypes from 'prop-types';

import './result.scss';

const Result = ({ amount, currency }) => (
  <div className="amount">
    <p className="amount-value">{amount}</p>
    <p className="amount-currency">{currency}</p>
  </div>
);

Result.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
export default Result;
