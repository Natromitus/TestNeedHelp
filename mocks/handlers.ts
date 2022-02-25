import { rest } from 'msw';
import apiConfig from '../app/configs/apiConfig.json';

const handlers = [
	rest.get(
		apiConfig.ACCOUNT_BASE_URL + apiConfig.ACCOUNT_MY_ACCOUNT_URL,
		(req, res, ctx) => {
		// TODO: Somehow get if is authenticated
		const isAuthenticated = false;

		if (!isAuthenticated)
		{
			return res(
				ctx.status(403),
				ctx.json({
					errorMessage: 'Not authorized',
				}),
			);
		}
	}),

	rest.post(
		apiConfig.ACCOUNT_BASE_URL + apiConfig.ACCOUNT_REFRESH_TOKEN_URL,
		(req, res, ctx) => {

		// TODO: Set new token
		return res(
			ctx.status(400),
		)
	}),

	// TODO: Login - set cookies
]

export { handlers } ;
