import React from 'react';
import { useGoogleLogin } from 'react-google-login';

// refresh token here
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = process.env.REACT_APP_OAUTH_CLIENTID;

function SignUp() {
    const onSuccess = (res) => {
        console.log('Signup success: currentUser:', res.profileObj);

        fetch('http://localhost:5001/users/google', {  
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: res.profileObj.givenName,
                last_name: res.profileObj.familyName,
                email: res.profileObj.email
            })
            })
        refreshTokenSetup(res);
        // console.log(body)
    };

    const onFailure = (res) => {
        console.log('Signup failed: res:', res);
    };

    const { signUp } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    });

    return (
        <button onClick={signUp} className='button'>
            <img src='icons/google.svg' alt='google login' className='icon'></img>
            <span className='buttonText'>Sign in with Google</span>
        </button>
    )
}

export default SignUp;