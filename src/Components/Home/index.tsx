import { Button, Card } from '@blueprintjs/core'
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom';

function Home() {
  const [myBoards] = useState([]);
  const { push } = useHistory();

  const onCreateClick = useCallback(() => {
    push({pathname: "/new", state: {data: true}})
  }, [push])

  return (
    <div style={{
      minWidth: "50%",
      maxWidth: "100%"
    }}>
      <h1>Dashboard</h1>
      <Card>
        <h2>My Boards</h2>
        {
          myBoards.length ? <div></div> : <h3>You are not in any board yet!</h3>
        }
        <Button text="Create new Board" onClick={onCreateClick} icon="plus" intent="success" outlined />

      </Card>
    </div>
  )
}

export default Home
