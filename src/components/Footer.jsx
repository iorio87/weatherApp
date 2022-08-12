import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
    <div className='footer text-lg fixed bottom-1 ml-1'>
       <Link to='/about'>
       <span className='text-lg text-white'>About</span> 
       </Link>
       
    </div>
    )
}