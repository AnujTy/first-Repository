import React, { useState } from 'react'
import './Contact.css'
import msg from '../../assets/msg.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'

const Contact = () => {
   const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "61efa380-b009-405f-950c-8ff7e5c0b5d1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success",res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

   
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et quae libero
          quo rem deserunt odit quasi reprehenderit sequi optio.</p>
        <ul>
          <li><img src={mail} alt="img" />anujkkr02@gmail.com</li>
          <li><img src={phone} alt="img" />+917060665342</li>
          <li><img src={location} alt="img" />Village-Chhimara,post-Heonra,Distt-Etawah <br />State Uttart pradesh 206130</li>
        </ul>
      </div>
      <div className="contact-col">
       <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required />
        <label>Phone Number</label>
        <input type="tel" name='Phone Number' placeholder='Enter Your Mobile Number' required />
        <label>Write your message here</label>
        <textarea name="message" rows="6" placeholder='Enter Your message' required></textarea>
       <button type='submit' className='btn1'>Submit Know</button>
       </form>
       <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
