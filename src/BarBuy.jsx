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
    } 

    render() {

        return(
            <section className={`BarBuy ${this.state.open ? "open":"close"}`}>

               <section className="status-change">
                    {/* icon */}
                    <FontAwesomeIcon
                        icon={['fas', 'shopping-cart' ]}
                        style={{color:"#fff"}}
                        size="1x"
                    />
                    {/* in the basket */}
                    <span className="hidden notif-buy">0</span>
               </section>

               

            </section>
        ) ;
    }
};
