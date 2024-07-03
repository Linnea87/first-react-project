import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

class NestingComponents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloaded: true,
      isloggedIn: true,
    }
  }
  render() {
    return (
      <div>
        <UserData isloaded={this.state.isloaded} />
        <UserMessage isloggedIn={this.state.isloggedIn} />
        
      </div>
    )
  }
}

export default NestingComponents