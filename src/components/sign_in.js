import React, { useState, useContext } from 'react';
import './sign_in.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const Sign_in = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { setEmail: updateEmail } = useContext(AuthContext);

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            setMessage('Please enter a valid email');
            return;
        }

        if (password.trim() === '') {
            setMessage('Password cannot be empty');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/validate-user', {
                email,
                password
            });

            if (response.data.success) {
                localStorage.setItem('userEmail', email);
                updateEmail(email);    
                navigate('/components/dashboard');
            } else {
                setMessage('Invalid credentials');
            }
        } catch (err) {
            console.error(err);
            setMessage(err.response?.data?.message || 'Sign in failed');
        }
    };

    const handleGoToSignUp = () => {
        navigate('/sign_up');
    };

    return (
        <div className='background'>
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <div className='instruction'>
                    <p>Enter your email and password</p>
                </div>

                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <FaUser className='icon' />
                </div>

                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className='icon' />
                </div>

                <button type="submit">Login</button>

                <div className="SignUp-Link">
                    <p>Don't have an account? <span onClick={handleGoToSignUp} style={{ color: 'blue', cursor: 'pointer' }}>Sign Up</span></p>
                </div>

                {message && <p className="message">{message}</p>}
            </form>
        </div>
        </div>
    );
};

export default Sign_in;
