import React from 'react'
import Logo from '../../component/logo/logo'
import {List, Radio, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'genius' // or boss
    }
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
          <Logo></Logo>
          <h2>我是注册页</h2>
          <WingBlank>
            <List>
              <InputItem>用户名</InputItem>
              <WhiteSpace />
              <InputItem>密码</InputItem>
              <WhiteSpace />
              <InputItem>确认密码</InputItem>
              <WhiteSpace />
              <RadioItem checked={this.state.type == 'genius'}>牛人</RadioItem>
              <RadioItem checked={this.state.type == 'boss'}>老板</RadioItem>
              <WhiteSpace />
            </List>
            <Button type="primary">注册</Button>
            <WhiteSpace />
          </WingBlank>
      </div>
    )
  }
}

export default Register