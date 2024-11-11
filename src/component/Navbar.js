import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
import Main from './Main';
import Search from './Search';
import Code from './Code';
import About from './About';
import Contact from './Contact';
import Login from './Login';


export default function Navbar() {
    return (
        <Router>
            <div className='title'>
                <div>
                    <h1>Study With me</h1>
                </div>
                <nav>
                    <button className="barButton"><h1><Link to="/"
                        className='link'>
                        Main</Link></h1></button>
                    <button className='barButton'><h1><Link to="/Search"
                        className='link'>
                        Search</Link></h1></button>
                    <button className='barButton'><h1><Link to="/Code"
                        className='link'>
                        Code</Link></h1></button>
                    <button className="barButton"><h1><Link to="/about"
                        className='link'>
                        About</Link></h1></button>
                    <button className="barButton"><h1><Link to="/contact"
                        className='link'>
                        Contact</Link></h1></button>
                    <button className="barButton"><h1><Link to="/Login"
                        className='link'>
                        Login</Link></h1></button>
                </nav>

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Search" element={<Search />} />
                    <Route path="/Code" element={<Code />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}