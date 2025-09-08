import React from 'react'
import './Programs.css'
import grograms1 from '../../assets/grograms1.jfif'
import grograms2 from '../../assets/grograms2.jfif'
import grogram4 from '../../assets/grograms4.jfif'
import degree1 from '../../assets/degree1.png'
import degree2 from '../../assets/degree2.png'
import degree3 from '../../assets/degree3.png'
const Programs = () => {
    return (
        <div className='programs'>
            <div className='program'>
                 <img src={grograms1} alt="img" />
                 <div className="caption">
                    <img src={degree1} alt="" />
                    <p>Graduation Degree</p>
                 </div>
            </div>

            <div className='program'>
                 <img src={grograms2} alt="img" />
                 <div className="caption">
                    <img src={degree2} alt="" />
                    <p> Post Graduation Degree</p>
                 </div>
            </div>

            <div className='program'>
                 <img src={grogram4} alt="img" />
                 <div className="caption">
                    <img src={degree3} alt="" />
                    <p>PhD Degree</p>
                 </div>
            </div>
        </div>
    )
}

export default Programs
