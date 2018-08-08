import React from 'react'
import './index.css'
import axios from 'axios'
import Public from '../../common'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.public = new Public()
  }
  handleInputChange(e) {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleInputClick(e) {
    if (e.keyCode === 13) {
      this.handleSubmit()
    }
  }
  handleSubmit() {
    // 提交ajax请求
    axios.post('/system/login', {
      username: this.state.username,
      password: this.state.password
    }).then((res) => {
      if (res.data.status === 200) {
        //记录cookie
        this.public.setCookie('user',res.data.result.token,1)
        // 提示登录成功
        alert(res.data.msg)
        // 进行跳转操作
        this.props.history.push('/')
      } else if (res.data.status === 203) {
        alert(res.data.msg)
      }
    })
  }
  resetInput() {
    this.setState({
      username: '',
      password: ''
    })
  }
  register() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div className="loginPage" >
        <div className="layui-form">
          <div className="layui-form-item">
            <label className="layui-form-label">用户名</label>
            <div className="layui-input-block">
              <input value={this.state.username} lay-verify="required" placeholder="请输入用户名" autoComplete="off" type="text" className="layui-input"
                name="username"
                onChange={this.handleInputChange.bind(this)}
                onKeyDown={this.handleInputClick.bind(this)}
              />
            </div>
          </div>
          <div className="layui-form-item">
            <label className="layui-form-label">密码框</label>
            <div className="layui-input-block">
              <input value={this.state.password} type="password" name="password" required lay-verify="required" placeholder="请输入密码" autoComplete="off" className="layui-input"
                onChange={this.handleInputChange.bind(this)}
                onKeyDown={this.handleInputClick.bind(this)}
              />
            </div>
          </div>
          <div className="layui-form-item">
            <div className="layui-input-block">
              <button className="layui-btn" lay-filter="formDemo"
                onClick={this.handleSubmit.bind(this)}
              >立即登录</button>
              <button className="layui-btn layui-btn-primary" lay-filter="formDemo"
                onClick={this.register.bind(this)}
              >马上注册</button>
              <button type="reset" className="layui-btn layui-btn-primary"
                onClick={this.resetInput.bind(this)}
              >重置</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}