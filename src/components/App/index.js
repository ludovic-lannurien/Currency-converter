// == Import npm
import React from 'react';

// == Import
import './styles.css';

import currencies from 'src/data/currencies';

// Import Components :
import Title from '../Title';
import Currency from '../Currency';
import Result from '../Result';

// == Composant APP :
const App = () => (
  <div className="app">
    <Title />
    <Currency
      infos={currencies}
    />
    <Result
      infos={currencies}
    />
  </div>
);

// == Export
export default App;
