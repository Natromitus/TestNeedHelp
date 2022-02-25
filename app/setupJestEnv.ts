import 'react-native-gesture-handler/jestSetup';
import { NativeModules, View } from 'react-native';

jest.mock('react-native-reanimated', () => {
	const Reanimated = require('react-native-reanimated/mock');

	// The mock for `call` immediately calls the callback which is incorrect
	// So we override it with a no-op
	Reanimated.default.call = () => {};

	return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Can these be moved to __mocks__ folder?
jest.mock("@react-native-cookies/cookies", () => ({
	get: jest.fn(),
	set: jest.fn(),
	clearAll: jest.fn(),
}));

NativeModules.ReactLocalization = {
	language: 'en',
};

export const enableScreens = jest.fn();
export const screensEnabled = jest.fn().mockReturnValue(false);
export const ScreenContainer = View;
