import React from 'react' ;
import DocumentTitle from 'react-document-title';
import { products } from './../products/products' ;
import ShowProducts from './../ShowProduct';

export default class Home extends React.Component {

    constructor( props ) {

        super( props ) ;

        this.onAddProduct = this.props.addOne ;
    }

    render() {

        return (
            <DocumentTitle title="sadness | home">
                <section className="Home">

                    {/* 
                        Slider of product
                        <Slider
                            list={[
                                {title : (string) ,subtitle: (string=null) ,  picture: ( string|url ) } , ...
                            ]}
                        />
                    */}

                    {/* flex - align random products */}

                    <ShowProducts
                        list={products.slice( 2 , 6 ) }
                        onClick={this.onAddProduct}
                    />

                </section>
            </DocumentTitle>
        )
    }
};
