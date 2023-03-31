import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Home from './Home';
import About from './About';
import Projects from './Projects';
// import Contact from './Contact';

function Layout() {
    return (
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    )
}

export default Layout;