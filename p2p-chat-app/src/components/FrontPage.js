import React, { useRef, useState } from 'react';
import { FaHandPeace } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useAuth } from '../context/AuthContext';

export default function FrontPage() {
    const userAlias = useRef();
    const userPassword = useRef();
    const { signup } = useAuth();
    const { user } = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(["chat_user"]);

    async function handleSignup(e) {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            await signup(userAlias.current.value, userPassword.current.value);
            setSuccess('Successfully Signed Up!!');     
        } catch (e) {
            setError();
        }
    }

    async function handleLogin(e) {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            await user.auth(userAlias.current.value, userPassword.current.value, ({ err }) => {
                if (err) {
                    return setError(err);
                } else {
                    setSuccess('Successfully Logged In!');
                    setCookie("chat_user", {user: userAlias.current.value}, { path: "/", maxAge: 60 * 60 * 5 });
                    navigate('/chat');
                }
            });
        } catch (e) {
            setError(e);
        }
    }

    return (
        <div className="front-page-container">
            <h1 style={{verticalAlign: "bottom"}}>Welcome <FaHandPeace /></h1>
            <div className='auth-box'>
                {error && <Alert variant='danger'>{error}</Alert>}
                {success && <Alert variant='success'>{success}</Alert>}
                <form className='auth-form'>
                    <label>Username: <span>*</span></label>
                    <input type="text" ref={userAlias} className='auth-input' maxLength={20} required/>
                    <label>Password: <span>*</span></label>
                    <input type="password" ref={userPassword} className='auth-input' required/>
                    <div className="auth-button-group">
                        <input name="sign" type="button" value="signup" className='submit-button' onClick={handleSignup}/>
                        <input name="login" type="button" value="login" className='submit-button' onClick={handleLogin}/>
                    </div>
                </form>
                <hr/>
                <footer>
                    <h3 style={{color: "white"}}>Powered By:</h3>
                    <img src="https://gun.eco/media/gun.svg" width={"200"}/>
                </footer>
            </div>
        </div>
    )
}
