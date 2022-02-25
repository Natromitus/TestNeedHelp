import React from 'react';
import { PublicStackParamList } from '../../common/types/Stacks';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../public/signIn/SignInScreen';
import SignUpScreen from '../public/signUp/SignUpScreen';
import tiConfig from '../../app/configs/testIdsConfig.json';
import ScreenNames from '../../app/configs/routerConfig';
import { View } from 'react-native';

const Stack = createStackNavigator<PublicStackParamList>();

const PublicStack: React.FC = () => {
	return (
		<View
			testID={tiConfig.PUBLIC_STACK}
			style={{flex: 1}}>
			<Stack.Navigator
				initialRouteName={ScreenNames.SignIn}
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen name={ScreenNames.SignIn} component={SignInScreen} />
				<Stack.Screen name={ScreenNames.SignUp} component={SignUpScreen} />
			</Stack.Navigator>
		</View>

	);
}

export default PublicStack;
