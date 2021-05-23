import React from 'react'
import { Route, Switch } from 'react-router'

import { DASHBOARD_ROUTE, NOTE_ROUTE, PROFILE_ROUTE } from '../utils/routes'

const Dashboard = React.lazy(() => import('../pages/dashboard/home/index'))
const Note = React.lazy(() => import('../pages/dashboard/notes/index'))
const Profile = React.lazy(() => import('../pages/dashboard/profile/index'))

function Routes () {
  return (
    <>
      <Switch>
        <Route exact path={DASHBOARD_ROUTE} component={Dashboard} />
        <Route exact path={NOTE_ROUTE} component={Note} />
        <Route exact path={PROFILE_ROUTE} component={Profile} />
      </Switch>
    </>
  )
}

export default Routes
