// == Import npm
import React from 'react';

// Import DATA pour dynamisation:
import currencies from 'src/data/currencies';

// Import Components :
import Title from '../Title';
import Currency from '../Currency';
import Result from '../Result';

// == Import
import './styles.css';

//! On souhaite rajouter des eventLIstener etc :
/* Objectif : pouvoir afficher ou masquer la liste des devises grâce à un bouton
- en fonction d'une variable dans App, ne pas afficher Currencies
- mettre en place un bouton
- gérer un événement clic sur le bouton, et "connecter" le traitement avec la
variable pour modifier l'affichage
*/

// == Composant APP :
const App = () => {
  const open = true;

  return (
    <div className="app">
      <Title />
      {open && <Currency infos={currencies} />}
      <Result
        infos={currencies}
      />
    </div>
  );
};

// == Export
export default App;
