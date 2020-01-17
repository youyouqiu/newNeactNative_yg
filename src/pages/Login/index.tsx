import React, {PureComponent} from 'react'
import {View, Text, ImageBackground, StatusBar, TouchableOpacity} from 'react-native'
import { connect } from '@/utils/dva';
import { ConnectState } from '@/models/connect';
import { Dispatch, AnyAction } from 'redux';
import {UserModelState} from '@/models/user'
import { NavigationInjectedProps } from 'react-navigation'
import style from './style'
import LinearGradient from 'react-native-linear-gradient';
import {login, getUserInfo} from '@/services/user'
import {Toast} from '@new-space/teaset'
import { createForm } from 'rc-form';
import LoginInput from './input'

interface HomeProps {
  dispatch: Dispatch<AnyAction>
  user: UserModelState
  form: any
}
interface HomeState {

}
class Login extends PureComponent<HomeProps & NavigationInjectedProps, HomeState> {

  private loading: any;

  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  login = async () => {
    let message: string = ''
    try {
      this.loading = Toast.loading('登陆中...', 100000, '')
      let res = await login('/connect/token', {
        username: '00006',
        password: '12345678',
        client_id: 'a8bf576375cf410d8fe2e039de573654',
        client_secret: 'Secret',
        grant_type: 'password',
      })
      let userInfoData = await getUserInfo('/v2/api/user/info', res.access_token)
      if (userInfoData && userInfoData.code === '0') {
        this.props.dispatch({
          type: 'user/saveUerInfo',
          payload: userInfoData,
        })
        this.props.navigation.navigate('AppRouter')
      } else {
        message = userInfoData.message
      }
    } catch (e) {
      message = e.message
    } finally {
      Toast.hide(this.loading);
      message && Toast.message(`登录失败:${message}`)
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <View style={style['main']}>
        <ImageBackground style={style['backImg']} source={require('@/images/image/loginBg.png')}>
          <View style={style['mainContent']}>
            <View style={style['headerHello']}>
              <Text style={style['headerText']}>Hello!</Text>
              <Text style={style['headerText']}>欢迎进入铺侦探</Text>
            </View>
            <View style={style['inputs']}>
              {getFieldDecorator('username', {
                validateFirst: true,
                rules: [
                  { required: true, message: '请输入账号!' },
                  {
                    pattern: /^1\d{10}$/,
                    message: '请输入正确的手机号!',
                  },
                ],
              })(
                <LoginInput
                  placeholder="请输入账号"
                  leftIcon={require('@/images/icons/public/username.png')}
                />
              )}
              {getFieldDecorator('password', {
                validateFirst: true,
                rules: [
                  { required: true, message: '请输入密码！' },
                  {
                    pattern: /^1\d{10}$/,
                    message: '请输入正确的密码!',
                  },
                ],
              })(
                <LoginInput
                  secureTextEntry={true}
                  textContentType="password"
                  style={style['password']}
                  placeholder="请输入密码"
                  leftIcon={require('@/images/icons/public/password.png')}
                />
              )}
            </View>
            <View style={style['bottom']}>
              <LinearGradient colors={['#A9D1FF', '#518BFE']} style={style['linear']}>
                <TouchableOpacity onPress={this.login} activeOpacity={0.8} style={style['loginBtn']}>
                  <Text style={style['loginText']}>登录</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default connect(({ global, user }: ConnectState) => ({
  user: user,
  global: global,
}))(createForm()(Login));
