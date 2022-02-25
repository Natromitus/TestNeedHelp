import { configureStore } from '@reduxjs/toolkit';
import curUserReducer from '../features/user/curUserSlice';
import authApi from '../features/user/authSlice';
import accountApi from '../features/user/accountSlice';

const middlewares = [
	authApi.middleware,
	accountApi.middleware,
];

if (__DEV__ && !process.env.JEST_WORKER_ID) {
	const createDebugger = require('redux-flipper').default;
	middlewares.push(createDebugger());
}

export const store = configureStore({
	reducer: {
		curUser: curUserReducer,
		[authApi.reducerPath]: authApi.reducer,
		[accountApi.reducerPath]: accountApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
