import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tiConfig from '../app/configs/testIdsConfig.json';

const SplashScreen: React.FC = () => {
	return (
		<SafeAreaView
			testID={tiConfig.SAFE_AREA_VIEW}
			style={styles.container}>
			<View
				testID={tiConfig.SPLASH_SCREEN}
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Splash Screen</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default SplashScreen;
