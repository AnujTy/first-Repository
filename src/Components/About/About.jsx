import React from 'react'
import './About.css'
import about1 from '../../assets/about1.jfif'
import play from '../../assets/play.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about1} alt="img" className='about1-img' />
                <p>Play the Video</p>
                <img src={play} alt="" className='play-img' onClick={() => { setPlayState(true) }} />
            </div>

            <div className="about-right">
                <h3>ABOUT UNIVERSIY</h3>
                <h2>Nurturing Tomorrow's leaders Today</h2>
                <p className='p'>Focuses on the comprehensive development of students, encompassing 
                    intellectual, emotional, and social growth to create well-rounded 
                    individuals.
                </p>
            </div>
        </div>
    )
}

export default About
