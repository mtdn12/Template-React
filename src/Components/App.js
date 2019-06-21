import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import PrivateRoute from 'Containers/PrivateRoute'
import PrivateRouteWithTemplate from '../Containers/PrivateRouteWithTemplate'
import ErrorBoundary from './pages/ErrorBoundary'
import * as routes from './routes'
import theme from '../Theme'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <ErrorBoundary>
      <Switch>
        <Route path="/login" component={routes.AsyncLogin} />
        <Redirect exact from="/" to="/modalExample" />
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
        {/* <Route path="/loading" component={routes.AsyncLoading} /> */}
        <Route component={routes.AsyncNotFound} />
      </Switch>
    </ErrorBoundary>
  </MuiThemeProvider>
)

export default App
