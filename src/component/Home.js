import React from 'react'
import './Home.css';
import Users from './Users';
import About from './About';
import Contacts from './Contacts';
import NotFoundPage from './NotFoundPage';
import {BrowserRouter as Router, Routes, Route, useParams, NavLink } from 'react-router-dom';

function Home() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path="/" element={<div>Welcome to the UseEffect home page
                        <br></br>
                        Navlink , useParams, http status code, * routing
                    </div>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/contacts/:id " element={<Contacts />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Home;