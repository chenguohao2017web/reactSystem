import React from 'react'
import { Route } from 'react-router-dom'
import './index.css'
import Control from '../control'
export default class ViewContent extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <Route path={`${this.props.match.url}control`} component={Control} />
    )
  }
}