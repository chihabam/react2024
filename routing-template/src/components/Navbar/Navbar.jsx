import React from "react";
import {NavLink} from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar_list'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/articles'>Articles</NavLink>
                </li>
                <li>
                    <NavLink to='/admin'>Admin</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
