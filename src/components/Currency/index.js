import React from 'react';
import PropTypes from 'prop-types';

import './currency.scss';

const Currency = ({ infos }) => (
  <ul className="currencies">
    {infos.map((item) => (
      <li className="currency" key={item.rate}>{item.name}</li>
    ))}
  </ul>
);

Currency.propTypes = {
  /* tableau d'objets : on indique la forme des objets (les propriétés avec leur type) */
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      rate: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired, // obligatoire de respecter le format
  ).isRequired, // la prop ingredients est obligatoire
};
export default Currency;
