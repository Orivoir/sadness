import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';
import Home from './RoutesRender/Home';
import BarBuy from './BarBuy';

export default class App extends React.Component {

  state = {

    basket: [ // Panier local status 
      /*
      {
        id: (int) ,
        title: ( string ) ,
        type: ( array ) ,
        picture: ( string ) ,
        quantity: ( int ) ,
        price: ( int )
      }
      */
    ] ,

  } ;

  constructor( props ) {

    super( props ) ;

    this.addOne2Basket = this.addOne2Basket.bind( this ) ; 
    this.removeOne2Basket = this.removeOne2Basket.bind( this ) ; 
  }

  checkAlreadyProduct( product ) {

    return this.state.basket.filter( currentProduct => currentProduct.id === product.id ).length >= 1 ;
  }

  /**
   * @param {Object} product
   * @description this method check integrity attributes of one product  
   */
  checkProduct( product ) {

    if( typeof product !== 'object' ) {
      console.warn('debug : action on one product reject because typeof product is not an object ') ;
      return false ;
    }
    if( !Object.keys( product ).filter( key => product[key] || product[key] === 0 ).length ) {
      console.warn('debug : action on one product reject because one or many attribute is not valid or dont exists .');
      return false ;
    }

    return true ;
  }

  /**
   * @bindMethod [constructor]
   * @param {SyntheticEvent} e 
   * @param {Object} product 
   * @description add one product in the basket or increment this quantity 
   */
  addOne2Basket( e , product ) {

    e.preventDefault() ;

    if( !this.checkProduct( product ) ) return ;

    product.quantity = 1 ;

    if( this.checkAlreadyProduct( product ) ) { // this product is already in the basket

      // increment quantity attribute on the product ;

      const getProduct = this.state.basket.filter( currentProduct => currentProduct.id === product.id )[0] ;

      /**
       * Abstract exception
       * this product is already inside the basket but dont found in the basket
       */
      if( !getProduct ) {

        console.warn('debug addOne2Basket , this product is already in the basket but get product an error occured');
        return ;
      }

      getProduct.quantity++ ;

      // Replace product by the delta product
      const newBasket = this.state.basket.map( currentProduct => (
        ( currentProduct.id === getProduct.id ) ? getProduct : currentProduct
      ) ) ;

      // Update the basket
      this.setState( {
        basket: newBasket
      } ) ;
  
    }
    else // this product is not already in the basket
      // Push in the basket
      this.setState( state => ({
        basket: [...state.basket , product]
      }) ) ;
  }

  /**
   * @bindMethod [constructor]
   * @param {SyntheticEvent} e 
   * @param {Object} product
   * @description remove one product in the basket
   */
  removeOne2Basket( e , product ) {

    e.preventDefault() ;

    if( !this.checkProduct( product ) ) return ;

    if( !this.checkAlreadyProduct( product ) ) {
      console.log( 'debug : removeOne2Basket , this product is not inside the basket ...' );
      return ;
    }

    // Filter basket for remove argument product
    const newBasket = this.state.basket.filter( currentProduct => currentProduct.id !== product.id ) ;

    // Update the basket
    this.setState( {
      basket: newBasket
    } ) ;

  }

  render() {

    const {basket} = this.state ;

    console.log( basket );

    return (
      <>

        <header>
        </header>
        
        <BarBuy 
          basket={basket}
          removeOne={this.removeOne2Basket}
        />

        <Switch>
          <Route exact path="/" render={() => <Home addOne={this.addOne2Basket} />} />
          {/* <Route exact path="/men" addOne={this.addOne2Basket} render={<Clothing type="men" />} /> */}
          {/* <Route exact path="/women" addOne={this.addOne2Basket} render={<Clothing type="women" />}} /> */}
          {/* <Route exact path="/child" addOne={this.addOne2Basket} render={<Clothing type="child" />}} /> */}
        </Switch>
      </>
    );

  }

};
