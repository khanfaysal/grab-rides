import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className = 'container'>
            <nav className='navbar navbar-light'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand fw-bold'>
                        Grab Rides
                    </Link>
                    <div className='d-flex'>
                        <Link to='/home' className='nav-link active'>
                            Home
                        </Link>
                        <Link to='/destination/1' className='nav-link active'>
                            Destination
                        </Link>
                        <Link to='/blog' className='nav-link active'>
                            Blog
                        </Link>
                        <Link to='/contact' className='nav-link active'>
                            Contact
                        </Link>
                        <Link to='/login' className='nav-link active'>
                            <button class="btn btn-warning">Login</button>
                        </Link>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                </div>
            </nav> 
        </div>
    );
};

export default Header;
