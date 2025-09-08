import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonilas/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/VideoPlayer/Video'
const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subtitle='Our PROGRAM' title="What We Offer" />
        <Programs />
        <Title subtitle=' About of' title=" University" />
        <About setPlayState={setPlayState} />
        <Title subtitle='Gallery' title=" Campus Photo" />
        <Campus />
        <Title subtitle='Testimonials' title=" What Student Says" />
        <Testimonials />
        <Title subtitle='Contact Us' title=" Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Video playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
