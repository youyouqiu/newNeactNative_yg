import React, { FunctionComponent } from 'react'
import { NavigationBar } from '@new-space/teaset'
import navigation from '@/utils/navigation'
import { scaleSize } from '@/utils/screenUtil'
import { TopBarProps } from './types'

const NavigatorBar: FunctionComponent<TopBarProps> = ({
	title,
	leftView,
	tintColor = '#000',
	rightView,
	topBarStyle,
	statusBarStyle = 'dark-content',
	statusBarHidden,
	backButtonPress = navigation.goBack,
}) => {

	if (typeof leftView === 'undefined') {
		leftView = (
			<NavigationBar.BackButton
				icon={require('@/images/icons/public/back_left.png')}
				onPress={backButtonPress}
				style={{ marginLeft: scaleSize(32) }}
			/>
		)
	}
	// StatusBar 现在未起作用
	
	return (
		<NavigationBar
			style={[{ backgroundColor: '#F4F4F4' }, topBarStyle]}
			tintColor={tintColor}
			title={title}
			titleStyle={{ color: '#000', fontSize: scaleSize(32),fontWeight:'500' }}
			leftView={leftView}
			rightView={rightView}
			statusBarStyle={statusBarStyle}
			statusBarHidden={statusBarHidden}
		/>
	)
}

export default NavigatorBar
