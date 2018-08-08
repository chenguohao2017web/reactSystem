import React from 'react'
import TopHeader from '../../component/top-header'
import NavSide from '../../component/nav-side'
import { Route } from 'react-router-dom'
import Contorl from '../../component/control'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.match.url)
  }
  render() {
    return (
      <div className="home">
        <TopHeader />
        <div className="container">
          <NavSide />
          <Route path="/control" exact component={Contorl} />
        </div>
      </div>
    )
  }
}