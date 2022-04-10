import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h2>LogIn Here</h2>
            <form action="">
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
            <div className='provider-signin'>
                <button>SignIn with Google</button>
            </div>
        </div>
    );
};

export default Login;