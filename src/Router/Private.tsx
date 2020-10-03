import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Fallback from '../Components/Fallback'
import TopNavbar from '../Components/TopNavbar'
import routes from './privateRoutes'

function Private() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "grid",
      gridTemplateRows: "50px calc(100vh - 50px)",
      gridTemplateColumns: "100%"
    }}>
      <TopNavbar />

      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: 'center'
      }}>
        <Switch>
          <Suspense fallback={<Fallback/>}>
            {routes.map(route => {
              return <Route {...route} exact={route.exact} key={route.name} />
            })}
          </Suspense>
        </Switch>
      </div>
    </div>
  )
}

export default Private
