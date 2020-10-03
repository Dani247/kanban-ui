import { Button, Popover } from '@blueprintjs/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import Notifications from './Notifications';

function TopNavbar() {
  const { push } = useHistory();

  return (
    <nav className="bp3-navbar bp3-dark">
      <div>
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">Kanban board</div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          <button onClick={() => push("/")} className="bp3-button bp3-minimal bp3-icon-home">Dashboard</button>
          <button onClick={() => push("/new")} className="bp3-button bp3-minimal bp3-icon-document">Create Board</button>
          <span className="bp3-navbar-divider"></span>
          <button onClick={() => push("/profile")} className="bp3-button bp3-minimal bp3-icon-user"></button>
          <Popover
            usePortal
            portalClassName="popoverPortal"
          >
            <Button minimal icon="notifications" />
            <Notifications />
          </Popover>
          
          <button onClick={() => push("/settings")} className="bp3-button bp3-minimal bp3-icon-cog"></button>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar
