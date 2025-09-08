import React, { useRef } from 'react'
import './Testimonials.css'
import back1 from '../../assets/back1.jpg'
import back from '../../assets/back.jpg'
import anuj from '../../assets/anuj.png'
import suneel from '../../assets/suneel.png'
import luvkush from '../../assets/luvkush.png'
import vishal from '../../assets/vishal.png'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;
  const sliderForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const sliderBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div className='testimonials'>
      <img src={back1} alt="" className='next-btn' onClick={sliderForward} />
      <img src={back} alt="" className='back-btn' onClick={sliderBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={anuj} alt="" />
                <div>
                  <h3>Anuj Saxena</h3>
                  <span>Edusity , USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est natus
                maiores rem praesentium recusandae? Consequuntur eius repellendus dolorum eos
                repellat quisquam impedit harum expedita optio placeat, eius asperiores?</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={suneel} alt="" />
                <div>
                  <h3>Suneel Saxena</h3>
                  <span>Edusity , USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est natus
                maiores rem praesentium recusandae? Consequuntur eius repellendus dolorum eos
                repellat quisquam impedit harum expedita optio placeat, eius asperiores?</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={luvkush} alt="" />
                <div>
                  <h3>Luvkush Shakya</h3>
                  <span>Edusity , USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est natus
                maiores rem praesentium recusandae? Consequuntur eius repellendus dolorum eos
                repellat quisquam impedit harum expedita optio placeat, eius asperiores?</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={vishal} alt="" />
                <div>
                  <h3>Vishal Saxena</h3>
                  <span>Edusity , USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est natus
                maiores rem praesentium recusandae? Consequuntur eius repellendus dolorum eos
                repellat quisquam impedit harum expedita optio placeat, eius asperiores?</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
