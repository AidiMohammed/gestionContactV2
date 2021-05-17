import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="#">{props.titel}</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/contact/add">Add Contact</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link"  to="/about">About</Link>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}
