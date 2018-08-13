import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ControlAll from '../control-all'
export default class AssocControl extends React.Component {
  render() {
    return (
      <div className="assoc-contorl">
        <Switch>
          <Route path="/assocControl/all" component={ControlAll} />
          <Route path="/assocControl/shop" component={ControlAll} />
        </Switch>
      </div>
    )
  }
}