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
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      baseAmount: 1,
      currency: 'Brazilian Real',
    };
  }

  handleClick() {
    console.log('clic !');

    const { open } = this.state;

    // négation de la valeur de open : si open est false, !open est true

    // INTERDIT de modifier directement le state, il faut passer par la
    // méthode setState, sinon React ne voit pas qu'on a mis à jour le state
    // et donc l'affichage n'est pas mis à jour
    // this.state.open = !this.state.open;

    // on décrit les modifications à appliquer sur le state
    // => automatiquement React va refaire le rendu du composant App en
    // utilisant les nouvelles valeurs du state
    this.setState({
      open: !open,
    });
  }

  // TODO VOILA PLUS OU MOINS CE QU'il faut faire
  //! Faire en sorte de récupérer une info sur le nom de la currency en event click pour pouvoir
  //! changer la valeur de notre variable currency qui est en state
  computeAmount() {
    // TODO faire le calcul et retourner le résultat
    // Récupérer le taux de convertion et le multiplier le baseAmount par le taux de la currency
    const { baseAmount, currency } = this.state;
    const currencySelected = currencies.find((item) => item.name === currency);
    const { rate } = currencySelected;
    const result = rate * baseAmount;

    return result;
  }

  render() {
    const { open, baseAmount, currency } = this.state;
    const result = this.computeAmount();
    return (
      <div className="app">
        <Title baseAmount={baseAmount} />
        <button
          type="button"
          onClick={this.handleClick.bind(this)}
        >
          Toggle currencies
        </button>
        {open
        && (
        <Currency
          infos={currencies}
        />
        )}
        <Result
          amount={result}
          currency={currency}
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
