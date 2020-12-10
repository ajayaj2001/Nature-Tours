import React from 'react'
import './Tours.scss';
import '../about/About.scss'
import '../header/Header.scss'
const Tours = () => {
    return (
        <div>
            <section className="section-tours" id="section__tours">
                <div className="u-center-text u-bottom-8">
                    <h2 className="heading-secondary"> MOST POPULAR TOURS </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__image card__image--1">&nbsp;</div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--org">the sea explorer</span></h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3 day tours</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-orange">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">
                                            only
                                        </div>
                                        <p className="card__price-value">
                                            $297
                                        </p>
                                    </div>
                                    <a className="btn btn--white" href="#popup">book now !</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3"><div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__image card__image--2">&nbsp;</div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--gre">THE FOREST HIKER</span></h4>
                            <div className="card__details">
                                <ul>
                                    <li>7 day tours</li>
                                    <li>Up to 40 people</li>
                                    <li>6 tour guides</li>
                                    <li>Sleep in provided tents</li>
                                    <li>Difficulty: medium</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-green">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <div className="card__price-only">
                                        only
                                        </div>
                                    <p className="card__price-value">
                                        $497
                                        </p>
                                </div>
                                <a className="btn btn--white" href="#popup">book now !</a>
                            </div>
                        </div>
                    </div></div>
                    <div className="col-1-of-3"><div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__image card__image--3">&nbsp;</div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--blu">THE SNOW ADVENTURER</span></h4>
                            <div className="card__details">
                                <ul>
                                    <li>5 day tours</li>
                                    <li>Up to 15 people</li>
                                    <li>3 tour guides</li>
                                    <li>Sleep in provided tents</li>
                                    <li>Difficulty: hard</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-blue">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <div className="card__price-only">
                                        only
                                        </div>
                                    <p className="card__price-value">
                                        $897
                                        </p>
                                </div>
                                <a className="btn btn--white" href="#popup">book now !</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="u-center-text u-top-10">
                    <button className="btn btn--green" href="#popup">Discover all tours</button>
                </div>
            </section>
        </div>
    )
}

export default Tours
