import React, { Component } from 'react'
import ContextTypePage from './ContextPage/ContextTypePage';
import ConsumePage from './ContextPage/ConsumePage';

import { ThemeProvider } from '../ThemeContext';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      },
    }
  }
  render() {
    return (
      <div>
        <h3>this is home</h3>
        <ThemeProvider value={this.state.theme}>
          <ContextTypePage />
          <ConsumePage />
        </ThemeProvider>
      </div>
    )
  }
}
