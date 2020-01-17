import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import StartLoading from './StartLoading'
import AppRouter from './AppRouter'
import AuthRouter from './AuthRouter'

const switchNavigator = createSwitchNavigator({
  StartLoading,
  AppRouter,
  AuthRouter
}, { initialRouteName: 'StartLoading' })

export default createAppContainer(switchNavigator)