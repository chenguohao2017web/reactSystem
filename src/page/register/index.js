import React from 'react'
import './index.css'
import axios from 'axios'
import Public from '../../common'

export default class Register extends React.Component {
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
    axios.post('/system/register', {
      username: this.state.username,
      password: this.state.password
    }).then((res) => {
      if (res.data.status === 200) {
        alert('注册成功')
        this.props.history.push('/login')
      } else {
        alert('已存在用户')
      }
    })
  }
  resetInput() {
    this.props.history.push('/login')
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
              >立即注册</button>
              <button type="reset" className="layui-btn layui-btn-primary"
                onClick={this.resetInput.bind(this)}
              >有账户？马上登录</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}