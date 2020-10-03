import { Button } from '@blueprintjs/core'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import firebase from 'firebase'
import { logout } from '../../Store/actions/user';
import { useHistory } from 'react-router-dom';

function SignOutButton() {
  const dispatch = useDispatch();
  const { push } = useHistory()

  const onLogout = useCallback(async () => {
    try {
      await firebase.auth().signOut()
      dispatch(logout())
      push("/")
    } catch (error) {
      window.console.error(error)
    }
  }, [dispatch, push]);

  return (
    <Button text="Sign out" intent="danger" icon="log-out" onClick={onLogout} outlined />
  )
}

export default SignOutButton
