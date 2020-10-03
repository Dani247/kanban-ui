import { Spinner } from '@blueprintjs/core'
import React from 'react'

interface props {
  size?: number
}

function Fallback({ size }: props) {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Spinner intent="success" size={size || 150} />
    </div>
  )
}

export default Fallback
