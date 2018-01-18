import React from 'react';
import { NavBar, Icon, InputItem, TextareaItem } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector'

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
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent=" < "
        >NavBar</NavBar>
        <AvatarSelector
          selectAvatar={(imgname) => {
            this.setState({ avatar: imgname })
          }}
        ></AvatarSelector>
        <InputItem
          onChange={(v) => this.onChange('titel', v)}
        >招聘职位</InputItem>
        <InputItem
          onChange={(v) => this.onChange('titel', v)}
        >公司名称</InputItem>
        <InputItem
          onChange={(v) => this.onChange('titel', v)}
        >职位薪资</InputItem>
        <TextareaItem
          title="职位要求"
          rows={3}
          autoHeight
          onChange={(v) => this.onChange('titel', v)}
        ></TextareaItem>
      </div>
    )
  }
}

export default BossInfo

