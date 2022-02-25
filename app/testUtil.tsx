import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import {
	combineReducers,
	configureStore,
	EnhancedStore
} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import curUserReducer from '../features/user/curUserSlice';
import authApi from '../features/user/authSlice';
import accountApi from '../features/user/accountSlice';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';

const inset = {
	frame: { x: 0, y: 0, width: 0, height: 0 },
	insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const rootReducer = combineReducers({
	curUser: curUserReducer,
	[authApi.reducerPath]: authApi.reducer,
	[accountApi.reducerPath]: accountApi.reducer,
});

const middlewares = [
	authApi.middleware,
	accountApi.middleware,
];

if (__DEV__ && !process.env.JEST_WORKER_ID) {
	const createDebugger = require('redux-flipper').default;
	middlewares.push(createDebugger());
}

type RootState = ReturnType<typeof rootReducer>;

type Store = {
	preloadedState?: Partial<RootState>;
	store?: EnhancedStore<RootState>;
}

type Wrapper = {
	children: JSX.Element | JSX.Element[];
}

const renderWithoutNav = (
	ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	{
		preloadedState,
		store = configureStore({
			preloadedState,
			reducer: rootReducer,
			middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
		}),
		...renderOptions
	}: Store = {}) => {

	function Wrapper({ children }: Wrapper) {
		return (
			<Provider store={store}>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</Provider>
		);
	}

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

const render = (
	ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	{
		preloadedState,
		store = configureStore({
			preloadedState,
			reducer: rootReducer,
			middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
		}),
		...renderOptions
	}: Store = {}) => {

	function Wrapper({ children }: Wrapper) {
		return (
			<Provider store={store}>
				<ThemeProvider>
					<NavigationContainer>
						{children}
					</NavigationContainer>
				</ThemeProvider>
			</Provider>
		);
	}

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// Re-export everything
export * from '@testing-library/react-native';
// Override render method
export { render, renderWithoutNav };
