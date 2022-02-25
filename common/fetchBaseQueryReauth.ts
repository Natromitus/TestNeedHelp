import { BaseQueryApi, QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryArgs, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import {
	BaseQueryFn,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError
} from '@reduxjs/toolkit/query';
import API_CONFIG from '../app/configs/apiConfig.json';
import { logout } from '../features/shared';
import { storeCookies } from './helpers/CookieHelper';
import rebuildJsonDotNetObj from './helpers/rebuildJsonDotNetObj';

const timeout = 20000;

const baseQueryWithReauth = (options: FetchBaseQueryArgs): BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError> => {

	const baseBq = fetchBaseQuery(options);
	const baseQuery = (
		args: string | FetchArgs,
		api: BaseQueryApi,
		extraOptions: {}) => {
		return Promise.race([
			baseBq(args, api, extraOptions),
			new Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>(resolve => setTimeout(() => resolve({
				error: {
					status: "FETCH_ERROR",
					error: "Timed out"
				}
			}), timeout))
		]);
	}

	return async (args, api, extraOptions) => {
		let result = await baseQuery(args, api, extraOptions);
		if (result.error && result.error.status === 401)
		{
			const refreshResult = await baseQuery({
					url: API_CONFIG.ACCOUNT_BASE_URL + API_CONFIG.ACCOUNT_REFRESH_TOKEN_URL,
					method: "POST",
					body: {}
				}, api, extraOptions);

			if (refreshResult.data)
			{
				result = await baseQuery(args, api, extraOptions)
			}
			else
			{
				api.dispatch(logout());
			}
		}

		storeCookies(options.baseUrl!);

		// Handle JSON.NET PreserveReferencesHandling
		if (result.data)
			result.data = rebuildJsonDotNetObj(result.data);

		if (result.error)
			result.error = rebuildJsonDotNetObj(result.error);

		return result;
	}
}

export default baseQueryWithReauth;
