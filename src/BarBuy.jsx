import React from 'react';
import './BarBuy.css';

/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/
import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( fas ) ;

export default class BarBuy extends React.Component {

    state = {

        open: false

    } ;

    constructor( props ) {

        super( props ) ;

        this.onRemoveProduct = this.props.removeOne ;
        this.onToggle = this.onToggle.bind( this ) ;
        this.onResize = this.onResize.bind( this ) ; 
    }

    /**
     * @BindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onResize( e ) {
        
        this.positionBarBuy() ;
    }

    positionBarBuy() {

        
        const 
            barbuy = this.refs.barbuy ,
            barbuyclose = this.refs.barbuyclose ,
            header = document.querySelector('header')
        ;

        if( !header )
            return ;
        
        else {
            barbuy.style.top = (header.offsetTop + header.offsetHeight) + 'px'
            barbuyclose.style.top = (header.offsetTop + header.offsetHeight) + 'px'
        }
    }

    componentDidMount() {

        this.positionBarBuy() ;

        window.addEventListener( 'resize' , this.onResize ) ;
    }
    
    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onToggle( e ) {

        e.preventDefault() ;
        this.setState( state => ( { open: !state.open } ) ) ;
    }

    loadOnClose() {
    }

    render() {

        return(
            <>
                {
                    <section ref="barbuyclose" className={`${this.state.open ? 'hidden' : ''} icon-close`} onClick={this.onToggle}>
                        <FontAwesomeIcon
                            icon={['fas' , 'shopping-cart' ]}
                            style={{color:"#fff"}}
                            size="2x"
                            className="icon-status"
                        />
                        <span className={`${!this.props.basket.length || this.state.open ? "o-hidden" : ""} notif-buy`}>{this.props.basket.length}</span>
                    </section>
                }

                <section ref="barbuy" className={`BarBuy ${this.state.open ? "open":"close"}`}>

                    <section className="status-change">
                            {/* icon */}
                            <FontAwesomeIcon
                                icon={['fas' , 'times' ]}
                                style={{color:"#fff"}}
                                size="2x"
                                onClick={this.onToggle}
                                className="icon-status"
                            />
                            {/* in the basket */}
                            <span onClick={this.onToggle} className={`${!this.props.basket.length || this.state.open ? "o-hidden" : ""} notif-buy`}>{this.props.basket.length}</span>

                    </section>

                    <section className="content-buy">
                        <ul>
                            {
                                // Panier
                                this.props.basket.length ? this.props.basket.map( product => (
                                    <li onClick={e => this.onRemoveProduct( e , product )} key={product.id} className="item-product">
                                        <figure>
                                            <img 
                                                src={product.picture}
                                                alt={product.title}
                                                widht="45"
                                                height="45"
                                            />
                                        </figure>
                                        <h2>{ product.title.split(' ')[0] } x { product.quantity } </h2>
                                        <blockquote>{ product.price * product.quantity } €</blockquote>
                                    </li>
                                ) ) : <p className="empty-basket">
                                    Your cart and currently empty&nbsp;
                                    <span role="img" aria-label="simley embarrassing">😅</span> 
                                </p>
                            }
                        </ul>

                        {
                            this.props.basket.length ? (
                                <>
                                    <hr />
                                    <h3>TOTAL</h3>

                                    {this.props.basket.length < 4 ?
                                        <ul className='list-total'>
                                            {this.props.basket.map( product => (
                                                <li key={product.id}>
                                                    {product.price} x {product.quantity}
                                                </li>
                                            ) )}
                                        </ul> : null
                                    }

                                    <p className="total-price">
                                        {
                                            this.props.basket.map( product => product.price * product.quantity ).add()
                                        } €
                                    </p>
                                </>
                            ) : null
                        }

                    </section>

                </section>
            </>
        ) ;
    }
};
