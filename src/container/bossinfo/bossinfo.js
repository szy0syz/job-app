import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/user.redux'

@connect(
  state => state.user,
  { update }
)
class BossInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: '',
      avatar: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect && redirect !== path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
        <NavBar mode="dark" leftContent=" < ">Boss完善信息页</NavBar>
        <AvatarSelector
          selectAvatar={(imgname) => {
            this.setState({ avatar: imgname })
          }}
        ></AvatarSelector>
        <InputItem
          onChange={(v) => this.onChange('title', v)}
        >招聘职位</InputItem>
        <InputItem
          onChange={(v) => this.onChange('company', v)}
        >公司名称</InputItem>
        <InputItem
          onChange={(v) => this.onChange('money', v)}
        >职位薪资</InputItem>
        <TextareaItem
          title="职位要求"
          rows={3}
          autoHeight
          onChange={(v) => this.onChange('desc', v)}
        ></TextareaItem>
        <Button
          onClick={() => {
            // 注意了，我要用redux了啊!!!!!
            this.props.update(this.state)
          }}
          type="primary"
        >保  存</Button>
      </div>
    )
  }
}

export default BossInfo

