import React from 'react';
import './BannerType.css';
import DocumentTitle from 'react-document-title' ;

export default class BannerType extends React.Component {

    render() {
        
        const { type } = this.props ;

        return (
            <DocumentTitle title={`sadness | ${type}`}>
                <section className={`banner-${type} banner-type`}>

                    {
                        /yoko/i.test(type) ? (<>
                            <video ref="videoYoko" loop autoPlay src="https://cdn.shopify.com/s/files/1/0240/3441/0601/files/video_site_yoko.mp4?11841" ></video>
                            <h2>YOKO Products</h2>
                        </>) :
                        
                        /men/i.test(type) ? (<>
                        
                        </>) :
                        
                        /women/i.test(type) ? (<>



                        </>) :
                        
                        // Else child banner
                        (<></>)

                    }

                </section>
            </DocumentTitle>
        ) ;
    }

};
