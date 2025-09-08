import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jfif'
import menu from '../../assets/Menu.png'
import { Link } from 'react-scroll';
const Navbar = () => {

const [sticky, setSticky] = useState(false);
useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY > 400 ? setSticky(true) : setSticky(false);
    })
},[])

const[mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = ()=>{
mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

    return (
        <nav className={`container ${sticky? 'dark-nav' :''}` }>
            <img src={logo} alt="img" className='logo' />
            <ul className={mobileMenu?'':"hide-mobile-menu"}>
                <li><a href="" className='active'><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></a></li>
                <li><a href=""><Link to='program' smooth={true} offset={-230} duration={500}>Program</Link></a></li>
                <li><a href=""><Link to='about' smooth={true} offset={-260} duration={500}>About Us</Link></a></li>
                <li><a href=""><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></a></li>
                <li><a href=""><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></a></li>
                <li><button className='btn1'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></button></li>
            </ul>
            <img src={menu} alt=""className="menu_icon" onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar
