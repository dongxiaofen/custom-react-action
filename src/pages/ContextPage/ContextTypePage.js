import React, { Component } from 'react'
import { ThemeContext } from '../../ThemeContext';

class ContextTypePage extends Component {
  // 取值方法一
  // static contextType = ThemeContext;
  render() {
    return (
      <div>
        ContextType 取值
        <p>传递的context值：{JSON.stringify(this.context)}</p>
      </div>
    )
  }
}

// 取值方法二
ContextTypePage.contextType = ThemeContext;

export default ContextTypePage;
