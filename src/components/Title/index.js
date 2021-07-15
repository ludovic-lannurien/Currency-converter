import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({ searchAmount, setSearchAmount }) => (
  <header className="header">
    <div className="header-content">
      <h1 className="header-title">Converter</h1>
      <input
        type="texte"
        className="header-input"
        placeholder="Votre montant en euro"
        onChange={(evt) => {
          setSearchAmount(evt.currentTarget.value);
        }}
        value={searchAmount}
      />
      <p className="header-info">euros</p>
    </div>
  </header>
);
Title.propTypes = {
  searchAmount: PropTypes.string.isRequired,
  setSearchAmount: PropTypes.func.isRequired,
};
export default Title;
