// == Import npm
import React from 'react';

// Import DATA pour dynamisation:
import currencies from 'src/data/currencies';

// Import Components :
import CustomButton from 'src/components/CustomButton';
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
Champ contrôlé : pour ne pas risquer d'avoir de différence de valeur entre le
state et l'input, on décide que le state est la seule source de vérité.
Si l'input veut changer sa valeur (saisie utilisateur) : il informe App, qui fera
appel à setState, donc ça provoquera un nouveau rendu, et App enverra en prop la
nouvelle valeur au composant qui contient l'input.
- avoir un champ dans le state pour stocker la valeur de l'input
- contrôler le champ en lecture : fournir la valeur du state en prop du composant qui
contient le champ, et l'input utilise cette prop pour son attribut value. A ce stade,
l'input est en read-only, si on saisit des caractères ils n'apparaissent pas
- contrôler le champ en écriture
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
      baseAmount: '1',
      currency: 'Brazilian Real',
      inputSearch: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOnList = this.handleClickOnList.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setSearchAmount = this.setSearchAmount.bind(this);
  }

  // appelé après le premier affichage du composant
  componentDidMount() {
    console.log('App - componentDidMount');

    this.updateTitle();
  }

  // appelé après chaque mise à jour de l'affichage du composant
  componentDidUpdate(prevProps, prevState) {
    console.log('App - componentDidUpdate');
    const { currency } = this.state;
    if (prevState.currency !== currency) {
      this.updateTitle();
    }
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

  handleClickOnList(newCurrency) {
    this.setState({
      currency: newCurrency,
    });
  }

  // Méthode qui me permet de modifier la valeur de mon input au niveau du composant currency
  setSearch(newValue) {
    this.setState({
      inputSearch: newValue,
    });
  }

  // Méthode qui me permet de mofier la valeur de mon input que le baseAmount au niveau du titre
  setSearchAmount(newAmount) {
    this.setState({
      baseAmount: newAmount,
    });
  }

  updateTitle() {
    console.log('mise a jour du titre');
    const { currency } = this.state;
    document.title = `Converter - ${currency}`;
  }

  // TODO VOILA PLUS OU MOINS CE QU'il faut faire
  //! Faire en sorte de récupérer une info sur le nom de la currency en event click pour pouvoir
  //! changer la valeur de notre variable currency qui est en state
  computeAmount() {
    // Récupérer le taux de convertion et le multiplier le baseAmount par le taux de la currency
    const { baseAmount, currency } = this.state;
    const baseAmountAsNumber = parseInt(baseAmount, 10);

    console.log(currency);
    const currencySelected = currencies.find((item) => item.name === currency);
    // eslint-disable-next-line prefer-destructuring
    const rate = currencySelected.rate;

    // multiplier le montant de base par le taux de conversion
    const result = baseAmountAsNumber * rate;

    // astuce pour arrondir à 2 décimales
    return (Math.round(result * 100) / 100);
  }

  render() {
    const {
      open,
      baseAmount,
      currency,
      inputSearch,
    } = this.state;

    const result = this.computeAmount();

    //! ICI ON VIENT FAIRE EN SORTE QUE NOTRE VALUE DE INPUT FACE UN FILTRE EN FONCTION DE NOS DATAS
    // Le premier if sert juste à ne pas changer la liste des currencies
    // si rien n'est inscrit dans l'input et le else suit la logique de
    // filtre avec la méthode filter de notre tableau data currencies
    let filteredCurrencies;
    if (inputSearch.length === 0) {
      filteredCurrencies = currencies;
    }
    else {
      filteredCurrencies = currencies.filter((item) => {
        // ici on est obligé de créer 2 nouvelles variables pour faire en sorte
        // que la saisie de l'utilisateur soit en minuscule et que les valeurs
        // dans notre data ou dans l'input ne soit pas changé pour ne pas tout chamboulé
        // la valeur de l'input ne doit pas être changé car sinon ça fait chelou quand
        // on tape un truc dans l'input en majuscule tout se mettrait quand même en minuscule
        const inputSearchLowered = inputSearch.toLowerCase();
        const nameLowered = item.name.toLowerCase();
        return nameLowered.includes(inputSearchLowered);
      });
    }
    return (
      <div className="app">
        <Title searchAmount={baseAmount} setSearchAmount={this.setSearchAmount} />
        <CustomButton manageClick={this.handleClick} />
        {open
        && (
        <Currency
          infos={filteredCurrencies}
          manageClick={this.handleClickOnList}
          search={inputSearch}
          setSearch={this.setSearch}
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
