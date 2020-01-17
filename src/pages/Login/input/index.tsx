import React, {PureComponent} from 'react'
import {View, TextInput, Image, ImageSourcePropType, ViewStyle, TextInputProps} from 'react-native'
import myStyle from '../style'

interface LoginInputProps extends TextInputProps {
  leftIcon: ImageSourcePropType
  placeholder?: string
  rightIcon?: ImageSourcePropType
  placeholderTextColor?: string
  style?: ViewStyle
}

class LoginInput extends PureComponent<LoginInputProps> {

  render() {
    let {leftIcon, placeholder, rightIcon, placeholderTextColor = '#425673', style, ...otherProps} = this.props
    return (
      <View style={[myStyle['LoginInput'], style]}>
        <Image source={leftIcon} style={myStyle['inputLeftIcon']}/>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={placeholderTextColor}
          {...otherProps}
          placeholder={placeholder}
          style={myStyle['input']}
          selectionColor="#fff"
        />
        {
          rightIcon && <Image source={rightIcon} style={myStyle['inputRightIcon']}/>
        }
      </View>
    )
  }
}

export default LoginInput
