import React from 'react'
import './Campus.css'
import Campus1 from '../../assets/Campus1.jfif'
import Campus2 from '../../assets/Campus2.jfif'
import Campus3 from '../../assets/Campus3.jfif'
import Campus4 from '../../assets/Campus4.jfif'
const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={Campus1} alt="" />
            <img src={Campus2} alt="" />
            <img src={Campus3} alt="" />
            <img src={Campus4} alt="" />
        </div>
      <button className='btn1'>See More here</button>
    </div>
  )
}

export default Campus
