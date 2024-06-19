import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid email or password. Please try again.'); // Set specific error message
        }
    };

    return (
        <>
            <div className='container'>
                <div className='form-wrapper'>
                    <form action='' onSubmit={handleSubmit}>
                        <h1>Dev<span>Chat.</span></h1>
                        <h4>Login</h4>
                        <input type='email' placeholder='Email' required />
                        <input type='password' placeholder='Password' required />
                        <button type='submit'>Login</button>
                        <div className='register-opt'>
                            <p>Do not have an account?</p>
                            <Link to='/register' style={{ color: 'white', fontWeight: '700' }}>Register</Link>
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
