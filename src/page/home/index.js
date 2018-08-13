import React from 'react'
import TopHeader from '../../component/top-header'
import NavSide from '../../component/nav-side'
import { Route, Switch } from 'react-router-dom'
import Contorl from '../../component/control'
import AssocContorl from '../../component/assoc-contorl'
import './index.css'
export default class Home extends React.Component {
  /**
   * 嵌套子路由跳转监听事件
   */
  handleRouterPush(url) {
    this.props.history.push(url)
  }
  render() {
    return (
      <div className="home">
        <TopHeader />
        <div className="container">
          <NavSide routerPush={this.handleRouterPush.bind(this)} />
          <div className="view-content">
            <Switch>
              {/* 控制台 */}
              <Route path="/control" component={Contorl} /> 
              {/* 进口管理 */}
              <Route path="/assocControl" component={AssocContorl} />
              <Route path="/" component={Contorl} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}