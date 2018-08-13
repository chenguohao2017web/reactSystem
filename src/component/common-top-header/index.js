import React from 'react'
import './index.css'
export default class CommonTopHeader extends React.Component {
  handleBack(){
    this.props.backBtn()
  }
  render(){
    return (
      <div className="common-top-header">
        <div className="text">{this.props.title}</div>
        <div className="back_icon" onClick={this.handleBack.bind(this)}>返回</div>
      </div>
    )
  }
}