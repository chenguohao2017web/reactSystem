import React from 'react'
import CommonTopHeader from '../common-top-header'
export default class Control extends React.Component {
  handleBackBtn(){
    console.log(this.props)
  }
  render() {
    return (
      <div className="control-desk">
        <CommonTopHeader title="控制台" backBtn={this.handleBackBtn.bind(this)}/>
      </div>
    )
  }
}