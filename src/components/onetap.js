/* global google */
import React, {useState, useEffect} from 'react';

const google = window.google;

function OneTap () {
    const [ isSignedIn, setIsSignedIn] = useState(false);

  const onOneTapSignedIn = (response) => {
    setIsSignedIn(true);
    console.log(response.credential);

    // fetch('https://mywebsite.com/endpoint/', {  
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             token: response.credential
    //         })
    //         })
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_OAUTH_CLIENTID,
      callback: onOneTapSignedIn
    })
    google.accounts.id.prompt(notification => {
    })
  }, [])

  return (
      <div>
          { isSignedIn ? <div>I am signed in</div> : <div>I am NOT signed in</div>}
      </div>
  )
}

export default OneTap;