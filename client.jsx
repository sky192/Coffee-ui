import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Coffees from './components/Coffees'

render(<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Coffees} />
  </Switch>
</BrowserRouter>,
document.getElementById('root'))
