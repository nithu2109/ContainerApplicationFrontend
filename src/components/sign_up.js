import React, { useState } from 'react';
import './sign_up.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sign_up = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);


    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    // Validation Functions
    const isValidName = (name) => {
        const regex = /^[A-Za-z ]{2}[A-Za-z ]*$/;
        return regex.test(name.trim());
    };
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/.test(password);

    // Field change handlers with validation
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setNameError(isValidName(value) ? '' : '❌ Name must be at least 2 letters (letters/spaces only)');
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(isValidEmail(value) ? '' : '❌ Invalid email format');
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(
            isValidPassword(value)
                ? ''
                : '❌ Password must be 8+ characters with upper, lower, number, and special character'
        );
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setConfirmPasswordError(value === password ? '' : '❌ Passwords do not match');
    };

    // Final Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nameError || emailError || passwordError || confirmPasswordError) {
            setMessage('❌ Please fix all errors before submitting');
            return;
        }

        if (!name || !email || !password || !confirmPassword) {
            setMessage('❌ All fields are required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', {
                name,
                email,
                password,
            });
            setMessage(`✅ ${response.data.message}`);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Sign up failed');
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className='instruction'>
                    <p>Create an Account</p>
                </div>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                        onBlur={() => setNameTouched(true)}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                {nameTouched && nameError && <p className="error">{nameError}</p>}

                <div className="input-box">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={() => setEmailTouched(true)}
                        required
                    />
                    <MdEmail className="icon" />
                </div>
                {emailError && <p className="error">{emailError}</p>}

                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Create Password"
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={() => setPasswordTouched(true)}
                        required
                    />
                    <FaLock className="icon" />
                </div>
                {passwordError && <p className="error">{passwordError}</p>}

                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        onBlur={() => setConfirmPasswordTouched(true)}
                        required
                    />
                    <FaLock className="icon" />
                </div>
                {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}

                <button type="submit">Sign Up</button>

                <div className="SignIn-Link">
                    <p>Already have an account? <span onClick={() => navigate('/')} style={{ color: 'blue', cursor: 'pointer' }}>Sign In</span></p>
                </div>

                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default Sign_up;