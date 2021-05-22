import React from 'react'
import { Route, Switch } from 'react-router'

import { DASHBOARD_ROUTE } from '../utils/routes'

const Dashboard = React.lazy(() => import('../pages/dashboard/home/index'))

function Routes () {
  return (
    <>
      <Switch>
        <Route exact path={DASHBOARD_ROUTE} component={Dashboard} />
      </Switch>
    </>
  )
}

export default Routes
