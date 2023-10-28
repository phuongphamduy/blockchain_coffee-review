import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';

const GoogleLoginComponent = () => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    const clientId = '602406268696-a76t9qt2ad8hbt0dnci89enht3k9mjum.apps.googleusercontent.com';

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            setAuthToken(storedToken);
        }
    }, []);

    const onSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        const userData = {
            email: result.email,
            name: result.name,
            image: result.imageUrl,
        };

        setUser(userData);
        setAuthToken(token);
        localStorage.setItem('authToken', token);

        try {
            await axios.post('/api/auth/google', userData);
        } catch (err) {
            console.error(err);
        }
    };

    const onFailure = (res) => {
        console.log('Error:', res);
        alert('failed!!')
    };

    const onLogoutSuccess = () => {
        setUser(null);
        setAuthToken(null);
        localStorage.removeItem('authToken');
    };

    return (
        <div>
            {user ? (
                <div>
                    <div>
                        <img src={user.image} alt={user.name} />
                    </div>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                    ></GoogleLogout>
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                />
            )}
        </div>
    );
};

export default GoogleLoginComponent;