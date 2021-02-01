import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CoffeesPage from './pages/Coffees'
import ErrorPage from './pages/Error'
import DescriptionPage from './pages/Description'

render(<BrowserRouter>
  <Switch>
    <Route path="/coffee" component={DescriptionPage} />
    <Route exact path="/" component={CoffeesPage} />
    <Route path="*" component={ErrorPage} />
  </Switch>
</BrowserRouter>,
document.getElementById('root'))
