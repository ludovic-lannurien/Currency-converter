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

/*
state (état) du composant : données qui peuvent changer au fil du temps. Si on
change ces données, React met automatiquement à jour l'affichage du composant.
Deux façons de mettre en place un state dans un composant :
- façon traditionnelle : transformer le composant pour l'écrire sous forme de classe
- façon moderne : avec le hook d'état (et le composant reste une fonction)

Un composant React c'est une fonction, sauf si...
- je veux utiliser un state
=> dans ce cas, on convertit le composant fonction en classe
https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class
*/

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
    };
  }
  render(){
  return (
    <div className="app">
      <Title />
      <button
        type="button"
        onClick={() => {
          console.log('clic !');
          //this.state.open = !this.state.open;
          this.setState({
            open: !this.state.open,
          });
        }}
      >
        Toggle currencies
      </button>
      {this.state.open && <Currency infos={currencies} />}
      <Result
        infos={currencies}
      />
    </div>
  );
  }
}
// == Composant APP :
// const App = () => {
// };

// == Export
export default App;
