import React from 'react'
import './About.scss';
import img1 from '../img/nat-1-large.jpg'
import img2 from '../img/nat-2-large.jpg'
import img3 from '../img/nat-3-large.jpg'
import img1small from '../img/nat-1.jpg'
import img2small from '../img/nat-2.jpg'
import img3small from '../img/nat-3.jpg'
const about = () => {
    return (
        <div>
            <main>
                <section className="section-about">
                    <div className="u-center-text u-bottom-8">
                        <h2 className="heading-secondary"> Exciting tours for adventurous people </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tri"> YOU'R GOiNG TO FALL IN LOVE WITH NATURE</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos, eveniet officia deserunt, corrupti porro nemo accusantium quidem maxime officiis facilis . </p>
                        </div>
                        <div className="col-1-of-2">
                            <h3 className="heading-tri">LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos, eveniet officia deserunt, </p>
                            <button className="btn-text">Learn More &rarr;</button>
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src={img1} srcSet={`${img1small} 300w,${img1} 1000w`} alt="adventure 1" className="composition__photo composition__photo--p1" sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw,300px " />
                                <img src={img2} srcSet={`${img2small} 300w,${img2} 1000w`} alt="adventure 2" className="composition__photo composition__photo--p2" sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw,300px " />
                                <img src={img3} srcSet={`${img3small} 300w,${img3} 1000w`} alt="adventure 3" className="composition__photo composition__photo--p3" sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw,300px " />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default about
