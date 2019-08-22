import React from 'react' ;
import './ShowProduct.css' ;

function ShowProduct({onClick,list}) {

    return(
        <article className="list-products">
            {
                list.map( product => (
                    <section className="product" key={product.id} id={`product-${product.id}`}>
                        
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