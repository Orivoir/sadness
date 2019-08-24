import React from 'react';
import './Clothing.css';
import ShowProduct from './../ShowProduct';
import {products} from './../products/products';
import BannerType from './../BannerType/BannerType';

export default class Clothing extends React.Component {
    
    get yoko() {

        const yoko = products.filter( product => /.*yoko.*/i.test(product.title) ) ;

        return yoko ;
    }

    get men() {

        const men = products.filter( product => product.type.includes( 'men' ) ) ;

        return men ;
    }

    get women() {
        
        const women = products.filter( product => product.type.includes( 'women' ) ) ;

        return women ;
    }

    get child() {
        
        const child = products.filter( product => product.type.includes( 'child' ) ) ;

        return child ;
    }

    render() {

        let typeCollection = [] ;

        const {banner , type , extra , addOne } = this.props ;

        type.map( current => (
            typeCollection = [ ...typeCollection , ...this[ current ] ]
        ) ) ;

        if( /yoko/i.test(extra) )
            typeCollection = this.yoko ;

        return (
            <>
            
            <BannerType type={banner} />

            <ShowProduct
                list={typeCollection}
                onClick={addOne}
            />
            </>
        ) ;
    }

};
