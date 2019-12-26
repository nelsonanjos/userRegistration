import React, { useState } from 'react';
import './style.css';

const Login = () => {

    const [userInput, setUser] = useState('');
    const [passInput, setPass] = useState('');

    var logged = false;

    var logins = JSON.parse(localStorage.getItem('tableUser'));

    let userChecking = logins.filter(auth => auth.user === userInput)[0];

    const authentication = () => {
        if (userChecking !== undefined) {
            if ((userChecking.user === userInput) && (userChecking.pass === passInput)) {
                logged = true;
                sessionStorage.setItem('logSession', JSON.stringify({
                    status: logged,
                    user: userChecking.user,
                }))
                window.location.href = "/";
            }
            else {
                setTimeout(() => { alert('User or password invalid!') }, 1000);
            }
        } else {
            setTimeout(() => { alert('User or password invalid!') }, 1000);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        authentication();
    }
    return (
        <div className="login-screen">
        <div className="login-form">
            <div className="line-top"></div>
            <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="fields">
                    <input
                        type="text"
                        placeholder="Insert your user"
                        onChange={e => setUser(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Insert your password"
                        onChange={e => setPass(e.target.value)}
                    />
                </div>
                <input
                    className="send-button"
                    type="submit"
                    value="Sing In"
                    onClick={handleSubmit}
                />
            </form>
        </div>
        </div>
    );

}
export default Login;