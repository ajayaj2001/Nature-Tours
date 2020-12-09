import React from 'react'
import './Stories.scss';
import '../about/About.scss'
import person1 from '../img/nat-8.jpg'
import person2 from '../img/nat-9.jpg'
import video1 from '../img/video.mp4'
import video2 from '../img/video.webm'
const Stories = () => {
    return (
        <div>
            <section className="section__stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={video1} type="video/mp4" />
                        <source src={video2} type="video/mp4" />
                        Your browser is not support
                    </video>
                </div>
                <div className="u-center-text u-bottom-8">
                    <h2 className="heading-secondary"> WE MAKE PEOPLE GENUINELY HAPPY</h2>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={person1} alt="person on tour" className="story__image" />
                            <figcaption className="story__caption">dia</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tri">I HAD THE BEST WEEK EVER WITH MY FAMILY</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita, similique. Accusamus iste libero maxime, sequi ea beatae odit
                             dolores quis tenetur saepe iusto dolore, et quaerat dolorem ad sunt porro? </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={person2} alt="person on tour" className="story__image" />
                            <figcaption className="story__caption">akashi</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tri">WOW! MY LIFE IS COMPLETELY DIFFERENT NOW</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita, similique. Accusamus iste libero maxime, sequi ea beatae odit
                             dolores quis tenetur saepe iusto dolore, et quaerat dolorem ad sunt porro? </p>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-bottom-8">
                    <a href="#" className="btn-text"> Read all stories  &rarr;</a>
                </div>
            </section>
        </div>
    )
}

export default Stories
