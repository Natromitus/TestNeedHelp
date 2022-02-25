import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tiConfig from '../../app/configs/testIdsConfig.json';

const HomeScreen: React.FC = () => {
	return (
		<SafeAreaView
			testID={tiConfig.SAFE_AREA_VIEW}
			style={styles.container}>
			<View
				testID={tiConfig.HOME_SCREEN}
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Home</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default HomeScreen;
