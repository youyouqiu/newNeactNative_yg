import { TopView } from '@new-space/teaset'
import { connect, MapStateToProps } from 'react-redux'
import React, { PureComponent, ElementType } from 'react'
import {View, Text, TextInput} from 'react-native'
import Index from './router'
import { NavigationContainerComponent } from 'react-navigation'
import { setNavigator } from '@/utils/navigation'

// @ts-ignore
TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, { defaultProps: false })
// @ts-ignore
Text.defaultProps = Object.assign({}, Text.defaultProps, { allowFontScaling: false })

class RealRoot extends PureComponent {

  componentDidMount() {
  }

  render() {
    // let { updateVisble, updateInfo,mainVisble } = this.state
    return (
      <TopView>
        <Index ref={(element: NavigationContainerComponent) => setNavigator(element)} />
        {/* <UpdateModal visible={updateVisble} updateInfo={updateInfo} setUpdateModa={this.setUpdateModa} /> */}
        {/* <MainModal visible={mainVisble} onClose={this.closeMain} onOk={this.mainUpdate}/> */}
      </TopView>
    )
  }
}

const mapStateToProps: MapStateToProps<any, any, any> = ({}) => ({
})

export default connect(mapStateToProps)(RealRoot)