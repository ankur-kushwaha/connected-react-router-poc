
import { sum } from "./util";
import { Toggle } from '@birdeye/core'


import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false
    }
  }
  render() {
    return (
      <div>
        Home
        <Toggle checked={this.state.flag} onChange={(e) => {
          this.setState({
            flag: e.target.checked
          })
        }} />
      </div>
    );
  }
}

export default Home;
