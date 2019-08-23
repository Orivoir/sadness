import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SliderSadness.css';

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

export default class SliderSadness extends React.Component {
    
    render() {

        const { list } = this.props ;

        return (
            // <div className="slide-container">

              <Slide {...properties}>

                {
                    list.map( product => (
                      <div className="each-slide" key={product.id} onClick={e => this.props.onClick(e , product) } >

                          <div style={{'backgroundImage': `url(${product.picture})`}}>
                            <span class="label-slide" >{product.title} ( {product.price} € ) </span>
                          </div>
                      
                      </div>    
                    ) )
                }
              
              </Slide>

          // </div>
        ) ;
    }
};
