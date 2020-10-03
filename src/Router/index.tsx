import React from 'react'
import { useSelector } from "react-redux"
import { HashRouter } from 'react-router-dom'

// public
import Public from './Public'

import { getUserId } from '../Store/selectors/user'
import Private from './Private'

function Router() {
  const userID = useSelector(getUserId);

  return (
    <HashRouter>
      {
        userID ? <Private /> : <Public />
      }
    </HashRouter>
  )
}

export default Router
