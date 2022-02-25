import React, { useEffect } from 'react';
import { useAppSelector } from './app/hooks';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './routes/SplashScreen';
import { useLazyGetMyAccountQuery } from './features/user/accountSlice';
import PublicStack from './routes/stacks/PublicStack';
import { setStoredTokenCookies } from './common/helpers/CookieHelper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import UserStack from './routes/stacks/UserStack';

const App = () => {
	const curUser = useAppSelector(state => state.curUser);
	const [getMyAccount] = useLazyGetMyAccountQuery();

	useEffect(() => {
		async function checkAuth() {
			await setStoredTokenCookies();
			await getMyAccount();
		}

		checkAuth();
	}, [])

	if (curUser.loading)
	{
		return (
			<SplashScreen />
		)
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				{ !curUser.user ? <PublicStack /> : <UserStack /> }
			</NavigationContainer>
		</GestureHandlerRootView>
	)
}

export default App;
