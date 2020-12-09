import React from 'react'
import './Popup.scss'
import person1 from '../img/nat-8.jpg';
import person2 from '../img/nat-9.jpg';

const Popup = () => {
    return (
        <div>
            <section className="popup" id="popup">
                <div className="popup__content">
                    <div className="pop__left">
                        <img src={person1} alt="#" className="popup__img" />
                        <img src={person2} alt="#" className="popup__img" />
                    </div>
                    <div className="popup__right">
                        <a href="#section__tours" className="popup__close">&times;</a>
                        <h2 className="heading-secondary">START BOOKING NOW</h2>
                        <h3 className="heading-tri">IMPORTANT – PLEASE READ THESE TERMS BEFORE BOOKING</h3>
                        <p className="popup__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                        libero tenetur voluptate laborum excepturi, tempore, eaque incidunt nulla quasi vitae
                        expedita magni delectus non? Magni, autem dolorem. Quam, pariatur vero.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, molestias fuga!
                        Iste unde at aliquam modi tenetur, perspiciatis accusamus earum itaque quaerat nostrum
                        consectetur voluptatibus neque ducimus dolorum vitae sunt.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                         </p>
                        <a href="#" className="btn btn--green">book now</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Popup
