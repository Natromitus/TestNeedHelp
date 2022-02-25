import { createAsyncThunk } from "@reduxjs/toolkit";
import apiConfig from '../../app/configs/apiConfig.json';
import cookiesConfig from '../../app/configs/cookiesConfig.json';
import CookieManager, { Cookies } from "@react-native-cookies/cookies";
import EncryptedStorage from 'react-native-encrypted-storage';

const logout = createAsyncThunk(
	'curUser/logout',
	async (thunkAPI) => {
		try
		{
			const curDate = new Date();
			const cookies: Cookies = await CookieManager.get(apiConfig.ACCOUNT_BASE_URL);

			let authToken = cookies[cookiesConfig.ACCESS_TOKEN];
			if (authToken)
			{
				authToken.value = "";
				authToken.expires = curDate.toString();
				await CookieManager.set(apiConfig.ACCOUNT_BASE_URL, authToken);
				await EncryptedStorage.setItem(cookiesConfig.ACCESS_TOKEN, JSON.stringify(authToken));
			}

			let refreshToken = cookies[cookiesConfig.REFRESH_TOKEN];
			if (refreshToken)
			{
				refreshToken.value = "";
				refreshToken.expires = curDate.toString();
				await CookieManager.set(apiConfig.ACCOUNT_BASE_URL, refreshToken);
				await EncryptedStorage.setItem(cookiesConfig.REFRESH_TOKEN, JSON.stringify(refreshToken));
			}
		}
		catch (e)
		{
			console.log(e);
		}

	}
);

export { logout };
