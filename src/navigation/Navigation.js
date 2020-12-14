import React from 'react'
import './Navigation.scss'
const Navigation = () => {
    return (
        <div>
            <section className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi__toggle" />
                <label htmlFor="navi__toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#future-purpose" className="navigation__link"><span>01</span>Home</a></li>
                        <li className="navigation__item"><a href="#future-purpose" className="navigation__link"><span>02</span>About Natous</a></li>
                        <li className="navigation__item"><a href="#future-purpose" className="navigation__link"><span>03</span>Adventure Way</a></li>
                        <li className="navigation__item"><a href="#future-purpose" className="navigation__link"><span>04</span>Stories</a></li>
                        <li className="navigation__item"><a href="#future-purpose" className="navigation__link"><span>05</span>Booking</a></li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Navigation
