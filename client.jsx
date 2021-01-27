import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CoffeesPage from './pages/Coffees'
import ErrorPage from './pages/Error'

render(<BrowserRouter>
  <Switch>
    <Route exact path="/" component={CoffeesPage} />
    <Route path="*" component={ErrorPage} />
  </Switch>
</BrowserRouter>,
document.getElementById('root'))
