import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';
import Home from './RoutesRender/Home';
import BarBuy from './BarBuy';
import {HashLink as Link } from 'react-router-hash-link'; 
import './Header.css';
import Clothing from './Clothing/Clothing';

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
    else {// this product is not already in the basket
      // Push in the basket
      product.quantity = 1 ;
      this.setState( state => ({
        basket: [...state.basket , product]
      }) ) ;
    }
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

    return (
      <>

        <header>
          <div id="wrap-header">

              {/* <h1></h1> */}

              <nav>
                <ul>
                  <li>
                    <Link id="nav-home-link" to="/">
                    </Link>
                  </li>
                  <li><Link to="/men">men</Link></li>
                  <li><Link to="/women">women</Link></li>
                  <li><Link to="/child">child</Link></li>
                  <li><Link id="nav-yoko-link" to="/yoko">yoko</Link></li>
                </ul>
              </nav>

          </div>
        </header>
        
        {/* bar status buy products */}
        <BarBuy 
          basket={basket}
          removeOne={this.removeOne2Basket}
        />

        <Switch>
          <Route exact path="/" render={() => <Home addOne={this.addOne2Basket} />} />
          <Route exact path="/men" render={() =>
            <Clothing banner="men" addOne={this.addOne2Basket} type={["men"]} />}
          />
          <Route exact path="/women" render={() => 
              <Clothing banner="women" addOne={this.addOne2Basket} type={["women"]} />
            } 
          />
          <Route exact path="/child" render={() => 
              <Clothing banner="child" addOne={this.addOne2Basket}  type={["child"]} />
            }
          />

          {/* yoko integrate mp4 : https://cdn.shopify.com/s/files/1/0240/3441/0601/files/video_site_yoko.mp4?11841 */}
          <Route exact path="/yoko"
            render={() =>
              <Clothing banner="yoko" type={["child","men","women"]} extra="yoko" />
            }
          />
        </Switch>
      </>
    
    );

  }

};
