import React from 'react'
import './Booking.scss'
import '../about/About.scss'
import '../header/Header.scss'
const Booking = () => {
    return (
        <div>
            <section className="section-booking">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form" autoComplete="off">
                                <div className="u-center-text u-bottom-small">
                                    <h2 className="heading-secondary"> START BOOKING NOW</h2>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full Name" id="name" required />
                                    <label htmlFor="name" className="form__label">Full Name</label>
                                </div>
                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email Address" id="email" required />
                                    <label htmlFor="email" className="form__label">Email Address</label>
                                </div>
                                <div className="form__group">
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small" name="size" />
                                        <label htmlFor="small" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Small tour group
                                            </label>
                                    </div>
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="large" name="size" />
                                        <label htmlFor="large" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Large tour group
                                            </label>
                                    </div>
                                    <div className="form__radio-group">
                                        <div className="u-center-text u-top-4">
                                            <button className="btn btn--green">next step &rarr;</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Booking
