import 'react-native';
import React from 'react';
import tiConfig from '../app/configs/testIdsConfig.json';
import apiConfig from '../app/configs/apiConfig.json';
import { fireEvent, render, renderWithoutNav } from '../app/testUtil';
import SignInScreen from '../routes/public/signIn/SignInScreen';
import { Text } from 'react-native';
import { server } from '../mocks/server';
import { rest } from 'msw';
import App from '../App';

describe('SignInScreen rendering', () => {
	test('SignInScreen renders correctly', () => {
		const tree = render(<SignInScreen />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test("SignInScreen renders core parts", async () => {
		const component = render(<SignInScreen />);

		const safeAreaView = await component.findByTestId(tiConfig.SAFE_AREA_VIEW);
		expect(safeAreaView).not.toBeNull();

		const screen = component.queryByTestId(tiConfig.SIGN_IN_SCREEN);
		expect(screen).not.toBeNull();

		const usernameInput = component.queryByTestId(tiConfig.SIGN_IN_USERNAME_INPUT);
		expect(usernameInput).not.toBeNull();

		const passwordInput = component.queryByTestId(tiConfig.SIGN_IN_PASSWORD_INPUT);
		expect(passwordInput).not.toBeNull();

		const submitButton = component.queryByTestId(tiConfig.SIGN_IN_SUBMIT);
		expect(submitButton).not.toBeNull();
	});
});

describe('Sign in form validation', () => {
	test.only("Sign in form shows server error", async () => {
		server.use(
			rest.post(apiConfig.ACCOUNT_BASE_URL + apiConfig.ACCOUNT_LOGIN_URL, (req, res, ctx) => {
				return res(
					ctx.status(400)
				);
			}),
		);

		const component = render(<SignInScreen />);

		const usernameInput = await component.findByTestId(tiConfig.SIGN_IN_USERNAME_INPUT);
		const passwordInput = component.getByTestId(tiConfig.SIGN_IN_PASSWORD_INPUT);
		const submit = component.getByTestId(tiConfig.SIGN_IN_SUBMIT);

		await fireEvent.changeText(usernameInput, "username");
		await fireEvent.changeText(passwordInput, "password");
		await fireEvent.press(submit);

		// Getting Warning: You called act(async () => ...) without await. on the line below
		const serverError = await component.findByTestId(tiConfig.SIGN_IN_SERVER_ERROR);
		expect(serverError).not.toBeNull();
	});
});

