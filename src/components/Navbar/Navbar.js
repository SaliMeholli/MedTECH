import React,{useState} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
function Navbar() {
    const [active, setActive] = useState('nav_menu')
    
    const [toggleIcon, setToggleIcon] = useState('nav_toggler')
    const navToggle = () => {
        active === 'nav_menu' 
        ? setActive('nav_menu nav_active') 
        : setActive('nav_menu');

        toggleIcon === 'nav_toggler'
        ? setToggleIcon('nav_toggler toggle')
        : setToggleIcon('nav_toggler')
    }
    
    return (
    <nav className="nav">
        <a href="#" className="nav_brand">N</a>
        <ul className={active}>
            <Link to="/" className="nav_item"><a href="#" className="nav_link">Home</a></Link>
            <Link to="/About" className="nav_item"><a href="#" className="nav_link">About</a></Link>
            <Link to="/Experience" className="nav_item"><a href="#" className="nav_link">Services</a></Link>
            <Link to="/Projects" className="nav_item"><a href="#" className="nav_link">Projects</a></Link>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>  
  )
}

export default Navbar