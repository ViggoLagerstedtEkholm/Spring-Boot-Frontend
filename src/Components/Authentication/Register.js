import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {RegisterUser} from "../Services/UserService";
import Message from "../Alerts/Message";
import {Loading} from "../Search/State/Loading";

function Register({redirectLogin}) {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [passwordRepeat, setPasswordRepeat] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const doRegister = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const registerPayload = new FormData();
        registerPayload.append("name", name);
        registerPayload.append("username", username);
        registerPayload.append("password", password);
        registerPayload.append("email", email);

        RegisterUser(registerPayload).then(() => {
            alert('Registered account.');
            if(redirectLogin){
                navigate("/login");
            }else{
                navigate("/");
            }
        }).catch(error => {
            setMessage("Could not register user! The username or email is probably taken.");
            alert(error);
            setIsLoading(false);
        });
    }

    return (
        <div className="container">
            <div className="title-bar">
                <h1>Register</h1>
                {message ? <Message msg={message}/> : null}

                <form onSubmit={doRegister}>
                    <div className="text_field">
                        <label>Name</label>
                        <input id="name" type="text" className="user-input-text" placeholder="Name"
                               value={name}
                               onChange={(e) => {
                                   setName(e.target.value);
                               }}/>
                    </div>

                    <div className="text_field">
                        <label>Email</label>
                        <input id="email" type="text" className="user-input-text" placeholder="Email"
                               value={email}
                               onChange={(e) => {
                                   setEmail(e.target.value);
                               }}/>
                    </div>

                    <div className="text_field">
                        <label>Username</label>
                        <input id="username" type="text" className="user-input-text" placeholder="Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}/>
                    </div>

                    <div className="text_field">
                        <label>Password</label>
                       <input id="password" type="password" className="user-input-text" placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}/>
                    </div>

                    <div className="text_field">
                        <label>Repeat password</label>
                        <input id="passwordRepeat" type="password" className="user-input-text" placeholder="Repeat password" value={passwordRepeat}
                        onChange={(e) => {
                            setPasswordRepeat(e.target.value);
                        }}/>
                    </div>

                    { isLoading ? <Loading/> : <input type="submit" name="submit_register" className="button-style-4" value="Register"/>}

                </form>
                <h4 class="form-authentication-text">Already have an account? <hr/><Link className="button-style-1" to="/login">Go to login page</Link> </h4>
            </div>
        </div>
);
}

export default Register;
