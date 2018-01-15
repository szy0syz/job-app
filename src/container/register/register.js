import React from 'react'
import Logo from '../../component/logo/logo'
import { List, Radio, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'

@connect(
  state => state.user,
  { register }
)
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius' // or boss
    }
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister() {
    this.props.register(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <h2>我是注册页</h2>
        <WingBlank>
          <List>
            {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
            <InputItem onChange={v => this.handleChange('user', v)}>用户名</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={v => this.handleChange('repeatpwd', v)}>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem
              checked={this.state.type === 'genius'}
              onChange={() => this.handleChange('type', 'genius')}
            >牛人</RadioItem>
            <RadioItem
              checked={this.state.type === 'boss'}
              onChange={() => this.handleChange('type', 'boss')}
            >老板</RadioItem>
            <WhiteSpace />
          </List>
          <Button type="primary" onClick={this.handleRegister}>注册</Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}

export default Register