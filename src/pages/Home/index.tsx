import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { connect } from '@/utils/dva';
import { ConnectState } from '@/models/connect';
import { Dispatch, AnyAction } from 'redux';
import {UserModelState} from '@/models/user'
import style from './style'
import { NavigationInjectedProps } from 'react-navigation'

interface HomeProps {
  dispatch: Dispatch<AnyAction>
  user: UserModelState
}
interface HomeState {

}
class Home extends PureComponent<HomeProps & NavigationInjectedProps, HomeState> {

  componentDidMount() {
  }

  gotoPath = () => {
    this.props.navigation.navigate('ProjectList')
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
        <TouchableOpacity style={style.testNav} onPress={this.gotoPath}>
          <Text>哈哈哈哈</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(({ global, user }: ConnectState) => ({
  user: user,
  global: global,
}))(Home)
