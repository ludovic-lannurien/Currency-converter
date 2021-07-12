// == Import npm
import React from 'react';

// == Import
import './styles.css';

// Import Components :
import Title from '../Title';
import Currency from '../Currency';
import Result from '../Result';

// == Composant APP :
const App = () => (
  <div className="app">
    <Title />
    <Currency />
    <Result />
  </div>
);

// == Export
export default App;
