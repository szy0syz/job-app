import { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'

@withRouter
@connect(
  null,
  { loadData }
)
class AuthRoute extends Component {
  componentDidMount() {
    // 判断是否跳转
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicList.indexOf(pathname) > -1) {
      return null
    }
  
    //先获取用户信息
    axios
      .get('/user/info')
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            // 有登录信息
            console.log('有登录信息')
            this.props.loadData(res.data.data)
          } else {
            // 没有登录信息
            this.props.history.push('/login')
            console.log('你无权登录')
          }
        }
      })

    // 状态：是否登录
    // 现在的url地址：logo是否需要跳转的
    // 用户的type：身份是老板还是牛人
    // 用户是否完善信息 选择头像 个人简介
  }

  render() {
    return null
  }
}

export default AuthRoute