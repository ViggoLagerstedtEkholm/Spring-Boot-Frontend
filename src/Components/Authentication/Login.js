import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {LoginUser} from "../Services/UserService";
import Message from "../Alerts/Message";
import {Loading} from "../Search/State/Loading";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loggedIn, setIsLoggedIn] = useState(false);
    let navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        LoginUser(username, password).then(response => {
            localStorage.clear();
            localStorage.setItem('accessToken', JSON.stringify(response['accessToken']));
            localStorage.setItem('refreshToken', JSON.stringify(response['refreshToken']));
            setIsLoading(false);
            setIsLoggedIn(true);
            window.location.reload();
        }).catch(error => {
            setIsLoading(false);
            setMessage("Could not login.");
        });
    }

    if(loggedIn){
        navigate("/");
    }

    return (
        <div className="container">
            <div className="title-bar">
                <h1>Login</h1>

                {message ? <Message msg={message}/> : null}

                <form onSubmit={login}>
                    <div className="text_field">
                        <label>Username</label>
                        <input type="username"
                               id="username"
                               placeholder="Username"
                               value={username}
                               onChange={(e) => {
                                   setUsername(e.target.value);
                               }}
                        />
                    </div>

                    <div className="text_field">
                        <label>Password</label>
                        <input type="password"
                               id="password"
                               placeholder="Password"
                               value={password}
                               onChange={(e) => {
                                    setPassword(e.target.value);
                               }}
                        />
                    </div>
                    {!isLoading ? <input type="submit" name="submit_login" className="button-style-4" value="Login"/> : <Loading/>}
                </form>

                <h4 className="form-authentication-text">Create new account?
                <hr/>
                <Link className="button-style-1" to="/register">Go to register page</Link></h4>
                <Link className="button-style-4" to="/reset/password/mail">I forgot my password</Link>
            </div>
        </div>
    );
}

export default Login;
