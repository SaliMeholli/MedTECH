import React from 'react'
import './Projects.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Projects() {
  return (
    <div className='Projects'>
        <h1>Our Projects</h1>
        <div className='Projects-container'>
        <div>
            <h1>MapSearch</h1>
            <p><a href="#">#HTML</a> <a href="">#CSS</a><a href="#"> #React</a>.</p>
            <a href="">Learn More</a>
        </div>
        <div>
        <h1>EcoSystem</h1>
            <p><a href="#">#HTML</a> <a href="">#CSS</a><a href="#"> #React</a>.</p>
            <a href="">Learn More</a>
        </div>
        <div>
        <h1>KosSourceApp</h1>
            <p><a href="#">#HTML</a> <a href="">#CSS</a><a href="#"> #React</a>.</p>
            <a href="">Learn More</a>
        </div>
        </div>


    </div>
    
  )
}

export default Projects