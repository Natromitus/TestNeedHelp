import React from 'react';
import ScreenNames from '../../app/configs/routerConfig';
import tiConfig from '../../app/configs/testIdsConfig.json';
import { View } from 'react-native';
import { UserStackParamList } from '../../common/types/Stacks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../protected/HomeScreen';

const Tab = createBottomTabNavigator<UserStackParamList>();

const UserStack: React.FC = () => {

	return (
		<View
			testID={tiConfig.USER_STACK}
			style={{ flex: 1 }}>
			<Tab.Navigator
				backBehavior="initialRoute">
				<Tab.Screen
					name={ScreenNames.Home}
					component={HomeScreen}
					options={{
						tabBarTestID: tiConfig.USER_STACK_TAB_BUTTON_HOME_STACK,
					}}
				/>
			</Tab.Navigator>
		</View>
	);
}

export default UserStack;
