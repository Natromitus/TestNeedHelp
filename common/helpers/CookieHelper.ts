import CookieManager, { Cookie } from '@react-native-cookies/cookies';
import cookiesConfig from '../../app/configs/cookiesConfig.json';
import apiConfig from '../../app/configs/apiConfig.json';
import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setStoredTokenCookies = async () => {
	try
	{
		let atCookie = await EncryptedStorage.getItem(cookiesConfig.ACCESS_TOKEN);
		if (atCookie)
		{
			let accessToken: Cookie = JSON.parse(atCookie);
			CookieManager.set(apiConfig.ACCOUNT_BASE_URL, accessToken);
		}

		let rtCookie = await EncryptedStorage.getItem(cookiesConfig.REFRESH_TOKEN);
		if (rtCookie)
		{
			let refreshToken: Cookie = JSON.parse(rtCookie);
			CookieManager.set(apiConfig.ACCOUNT_BASE_URL, refreshToken);
		}

		// TODO: Discuss other cookies and their convention, read and store them
	}
	catch (e)
	{
		console.log(e);
	}
}

const storeCookies = (url: string) => {
	try
	{
		CookieManager.get(url)
			.then((cookies) => {
				Object.entries(cookies).map(([key, cookie]) => {
					if (key === cookiesConfig.ACCESS_TOKEN ||
						key === cookiesConfig.REFRESH_TOKEN)
					{
						EncryptedStorage.setItem(key, JSON.stringify(cookie));
					}
					else
					{
						AsyncStorage.setItem(key, JSON.stringify(cookie));
					}
				})
			});
	}
	catch (e)
	{
		// TODO: Test mocking
		// console.log(e);
	}
}

export { storeCookies };
export { setStoredTokenCookies };
