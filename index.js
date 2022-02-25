import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</SafeAreaProvider>
		</Provider>
	)
}

AppRegistry.registerComponent(appName, () => AppWrapper);
