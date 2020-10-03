import { Card, FormGroup, InputGroup } from '@blueprintjs/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { getUserData } from '../../Store/selectors/user'

function Profile() {
  const userData: UserState = useSelector(getUserData)

  return (
    <div style={{
      minWidth: "50%",
      maxWidth: "100%"
    }}>
      <h1>Profile</h1>
      <Card elevation={2} style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "150px calc(100% - 150px)"
      }}>
        <div style={{ display: "flex", alignItems: "center", width: "150px" }}>
          <img style={{ borderRadius: "50%" }} width="150px" src={userData.photoURL as string} alt="user" />
        </div>
        <div style={{ width: "100%", paddingLeft: "10px" }}>
          <FormGroup
            label="User name"
            labelFor="userName"
          >
            <InputGroup
              id="userName"
              value={userData.displayName as string}
              readOnly
            />
          </FormGroup>
          <FormGroup
            label="Email"
            labelFor="email"
          >
            <InputGroup
              id="email"
              value={userData.email as string}
              readOnly
            />
          </FormGroup>
          <FormGroup
            label="Phone number"
            labelFor="phoneNumber"
          >
            <InputGroup
              id="phoneNumber"
              value={userData.phoneNumber as string}
              readOnly
            />
          </FormGroup>
        </div>
      </Card>
    </div>
  )
}

export default Profile
