import React from 'react';
import PropTypes from 'prop-types';

import './currency.scss';

const Currency = ({
  infos,
  manageClick,
  search,
  setSearch,
}) => (
  <div className="currencies">
    <input
      className="currencies-search"
      type="text"
      placeholder="Rechercher une devise"
      onChange={(evt) => {
        setSearch(evt.currentTarget.value);
      }}
      value={search}
    />
    <ul>
      {infos.map((item) => (
        <li
          className="currency"
          key={item.name}
          onClick={() => {
            console.log('clic sur une devise');
            // on appelle la fonction fournie en prop
            manageClick(item.name);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

Currency.propTypes = {
  /* tableau d'objets : on indique la forme des objets (les propriétés avec leur type) */
  manageClick: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      rate: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired, // obligatoire de respecter le format
  ).isRequired, // la prop "infos" est obligatoire
};

export default Currency;

//! J'avais utilisé item.rate pour la key mais finalement, il existe un risque pour qu'un jour
//! le taux soit identique à un autre donc vaut mieux ici mettre le name
//! Mais normalement il devrait y avoir un id pour que celà soit parfait
