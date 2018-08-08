import React from 'react'
import './index.css'
import Public from '../../common'
import { Link } from 'react-router-dom'
export default class TopHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: ''
    }
    this.public = new Public()
  }
  _getCook() {
    const res = this.public.getCookie('user') || ''
    this.setState({
      token: res
    })
  }
  componentDidMount() {
    this._getCook()
  }
  handleLoginOut() {
    this.public.removeCookie('user')
    this._getCook()
  }
  render() {
    const token = this.state.token
    return (
      <div className="top-header">
        <div className="logo">
          React Native
        </div>
        <div className="state-wrap">
          {
            token ?
              <React.Fragment>
                <div className="group">
                  <div className="avator"></div>
                  <div className="name">{this.state.token}</div>
                </div>
                <div className="group">
                  <div className="text" onClick={this.handleLoginOut.bind(this)}>注销</div>
                </div>
              </React.Fragment>
              :
              <div className="group">
                <Link to="/login" className="text" style={{color:'#fff'}}>登录</Link>
              </div>
          }
        </div>
      </div>
    )
  }
}