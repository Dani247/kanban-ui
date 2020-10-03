import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import firebase from 'firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'
import { login } from '../Store/actions/user'


firebase.initializeApp({
  apiKey: "AIzaSyB66UoL7USQHJM9KLcq65Fr8YP7rV4SrCQ",
  authDomain: "kamban-eb00b.firebaseapp.com"
});

const uiConfig: any = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: () => false
  }
}

function Public() {
  const dispatch = useDispatch();

  const setUserData = useCallback((user: any) => {
    if (!user) return;
    const userData: UserState = {
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      refreshToken: user.refreshToken,
      uid: user.uid,
    }
    dispatch(login(userData));
  }, [dispatch]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUserData)
  }, [setUserData])

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>

      <h1>Kamban board</h1>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
      <h4>By Daniel Diaz</h4>
    </div>
  )
}

export default Public
