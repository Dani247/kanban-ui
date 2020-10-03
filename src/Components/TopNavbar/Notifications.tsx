import React from 'react'
import Fallback from '../Fallback'

function Notifications() {
  return (
    <div style={{
      width: "auto",
      maxWidth: "300px",
      height: "auto",
      maxHeight: "50vh",
      padding: "15px"
    }}>
      <Fallback size={50} />
    </div>
  )
}

export default Notifications
