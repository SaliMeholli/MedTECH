import React from 'react'
import './About.css';
import {FaDesktop} from 'react-icons/fa';
import {AiOutlineMobile} from 'react-icons/ai'
import {MdOutlineDesignServices} from 'react-icons/md'
import {DiUnitySmall} from 'react-icons/di'
function About() {
  return (
    <div className='about'>
       
        <div className="about-icons">
            <div>
                <FaDesktop className='icon'/>
                <p>Web Development</p>
            </div>
            <div>
                <AiOutlineMobile className='icon'/>
                <p>Mobile Development</p>
            </div>
            <div>
                <MdOutlineDesignServices className='icon'/>
                <p>UI/UX</p>
            </div>
            <div>
                <DiUnitySmall className='icon'/>
                <p>Unity</p>
            </div>
        </div>
    </div>
  )
}

export default About