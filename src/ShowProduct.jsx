import React from 'react' ;
import './ShowProduct.css' ;


/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/
import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( fas ) ;


function ShowProduct({onClick,list}) {

    return(
        <article className="list-products">
            {
                list.map( product => (
                    <section className="product" key={product.id} id={`product-${product.id}`}>

                        <div className="wrap-btns" onClick={ (e) => onClick( e , product ) } >
                            <button>
                                
                                <FontAwesomeIcon
                                    icon={['fas','cart-plus']}
                                    size="2x"
                                    color={{color:"#fff"}}
                                />
                        
                            </button>
                            
                            <button>
                                see more
                            </button>
                        </div>
                        <figure onClick={ (e) => onClick( e , product ) }>
                            <img
                                src={product.picture}
                                width="350"
                                height="350"
                                alt={product.title}
                            />

                            <figcaption>
                                <h2>{product.title}</h2>
                                <small> { product.type.join(' , ') } </small>
                                <blockquote>{product.price} €</blockquote>
                            </figcaption>
                        </figure>

                    </section>
                ) )
            }
        </article>
    )

}

export default ShowProduct ;