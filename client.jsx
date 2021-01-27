import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CoffeesPage from './pages/Coffees'

render(<BrowserRouter>
  <Switch>
    <Route exact path="/" component={CoffeesPage} />
  </Switch>
</BrowserRouter>,
document.getElementById('root'))
