import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
    return (
    <div className='footer text-lg'>
       <Link to='/about'>
       <span className='text-lg text-white'>About</span> 
       </Link>
       
    </div>
    )
}