import React from 'react'
import './Header.scss';
import logo from '../img/logo-white.png'
const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header__logo-box">
                    <img src={logo} alt="logo" className="header__logo" />
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">outdoors</span>
                        <span className="heading-primary--sec">is where life happens</span>
                    </h1>
                    <button className="btn btn--white btn--animation" >Discover Our Tours</button>
                </div>
            </header>
            {/* <section>
                <div className="row">
                    <div className="col-1-of-2">col-1-of-2</div>
                    <div className="col-1-of-2">col-1-of-2</div>
                </div>
                <div className="row">
                    <div className="col-1-of-3">col-1-of-3</div>
                    <div className="col-1-of-3">col-2-of-3</div>
                    <div className="col-1-of-3">col-2-of-3</div>
                </div>
            </section> */}
        </div>
    )
}

export default Header
