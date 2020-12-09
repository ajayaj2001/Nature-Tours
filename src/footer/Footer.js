import React from 'react'
import logosmall2x from '../img/logo-green-small-2x.png'
import logosmall1x from '../img/logo-green-small-1x.png'
import logo2x from '../img/logo-green-2x.png'
import logo1x from '../img/logo-green-1x.png'
import './Footer.scss';
import '../about/About.scss';
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer__logo-box">
                    <picture className="footer-logo" >
                        <source srcSet={`${logosmall2x} 2x,${logosmall1x} 1x`} media="(max-width:37.5em)" />
                        <img src={logo2x} srcSet={`${logo2x} 2x,${logo1x} 1x`} alt="logo" />
                    </picture>

                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="#" className="footer__link">company</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">contact us</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">carrear</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">privacy policy</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright">
                            Built by <a href="#" className="footer__link">AJAY AJ</a> for his Personal usage. Copyright © by
                            <a href="#" className="footer__link">AJ-sites</a>You are 100% allowed to use this webpage for insperation(insperired),
                        but NOT to claim it as your own design. i think its petty good ,lot more advance css and sass.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer