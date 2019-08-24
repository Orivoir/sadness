import React from 'react';
import './BannerType.css';
import DocumentTitle from 'react-document-title' ;
import childImg from './child_banner.jpg';

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
                        
                        /women/i.test(type) ? (<>

                            <figure className="women-figure-banner">
                                <img
                                    alt="women clothings"
                                    src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/30/12/sustainable-fashion-brands-women-indybest-0.jpg"
                                    // default size (px)
                                    height="500"
                                    width="900"
                                />
                                <h2>WOMEN Products</h2>
                            </figure>
                        </>) :
                        
                        /men/i.test(type) ? (<>

                            <figure className="men-figure-banner">
                                <img
                                    alt="men clothings"
                                    src="https://www2.hm.com/content/dam/campaign-men-s00/july-2019/6040b/6040-Men-3x2.jpg"
                                    // default size (px)
                                    height="500"
                                    width="900"
                                />
                                <h2>MEN Products</h2>
                            </figure>

                        </>) :
                        
                        // Else child banner
                        (<>
                            <figure className="child-figure-banner">
                                <img
                                    alt="child clothings"
                                    src={childImg}
                                    // default size (px)
                                    height="500"
                                    width="900"
                                />
                                <h2>CHILD Products</h2>
                            </figure>
                        </>)

                    }

                </section>
            </DocumentTitle>
        ) ;
    }

};
