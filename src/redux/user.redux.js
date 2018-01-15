import { getRedirectPath } from '../util'
const axios = require('axios')

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
  redirectTo: '', // 用户应该跳转到哪个页面
  isAuth: false,
  msg: '',
  pwd: '',
  type: ''
}
// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
    case LOGIN_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
    case ERROR_MSG:
      return { ...state, msg: action.msg, redirectTo: '', isAuth: false }
    default:
      return state
  }
}

function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data }
}

function loginSuccess(data) {
  return { type: LOGIN_SUCCESS, payload: data }
}

export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errorMsg('用户名和密码必须输入')
  }
  return dispatch => {
    axios
      .post('/user/login', { user, pwd })
      .then(res => {
        if (res.status === 200 && res.data.code === '0') {
          dispatch(loginSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function register({ user, pwd, repeatpwd, type }) {
  if (!user || !pwd || !repeatpwd || !type) {
    return errorMsg('用户名密码必须输入')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('两次密码输入不一致')
  }
  return dispatch => {
    axios
      .post('/user/register', { user, pwd, type })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuccess({ user, pwd, type }))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}



