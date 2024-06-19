import React, { useContext } from 'react';
import About from '../assets/about.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const currentUser = useContext(AuthContext);

    // Check if currentUser is null or undefined
    if (!currentUser) {
        // Handle case where currentUser is not available
        return null;
    }

    // Check if currentUser contains the expected properties
    if (!currentUser.photoURL || !currentUser.username) {
        // Handle case where currentUser properties are missing
        return (
            <div className="navbar">
                <h1 className='logo'>Dev<span>Chat.</span></h1>
                <div className="user">
                    <button className='btn1' onClick={() => signOut(auth)}>Log out</button>
                </div>
            </div>
        );
    }

    // Render navbar with user information
    return (
        <div className="navbar">
            <h1 className='logo'>Dev<span>Chat.</span></h1>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.username}</span>
                <button className='btn1' onClick={() => signOut(auth)}>Log out</button>
            </div>
        </div>
    );
};

export default Navbar;
