import React from 'react'
import './Features.scss';
import '../about/About.scss';
const Features = () => {
    return (
        <div>
            <section className="section-features">
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box-icon icon-basic-world" />
                            <h3 className="heading-tri u-margin-bottom-small">Explore THE WORLD</h3>
                            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, vero, voluptatum quibusdam </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box-icon icon-basic-compass" />
                            <h3 className="heading-tri u-margin-bottom-small">MEET NATURE</h3>
                            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, vero, voluptatum quibusdam </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box-icon icon-basic-map" />
                            <h3 className="heading-tri u-margin-bottom-small">FIND YOUR WAY</h3>
                            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, vero, voluptatum quibusdam </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box-icon icon-basic-heart" />
                            <h3 className="heading-tri u-margin-bottom-small">LIVE A HEALTHIER LIFE</h3>
                            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, vero, voluptatum quibusdam </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
