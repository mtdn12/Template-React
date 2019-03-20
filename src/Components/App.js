import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import PrivateRoute from 'src/Containers/PrivateRoute'
import PrivateRouteWithTemplate from 'src/Containers/PrivateRouteWithTemplate'
import ErrorBoundary from './pages/ErrorBoundary'
import * as routes from './routes'

const App = () => (
  <ErrorBoundary>
    <Switch>
      <Route path="/login" component={routes.AsyncLogin} />
      <Redirect exact from="/" to="/product" />
      <PrivateRouteWithTemplate
        path="/product"
        exact
        component={routes.AsyncProduct}
      />
      <PrivateRouteWithTemplate
        path="/modalExample"
        exact
        component={routes.AsyncModalExample}
      />
      <PrivateRoute
        path="/product/create"
        exact
        component={routes.AsyncCreateEditProduct}
      />
      <PrivateRoute
        path="/product/edit/:id"
        exact
        component={routes.AsyncCreateEditProduct}
      />
      <Route component={routes.AsyncNotFound} />
    </Switch>
  </ErrorBoundary>
)

export default App
