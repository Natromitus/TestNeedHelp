import { createApi } from "@reduxjs/toolkit/query/react";
import API_CONFIG from '../../app/configs/apiConfig.json';
import baseQueryWithReauth from "../../common/fetchBaseQueryReauth";
import IMAccount from "../../common/types/MAccount";

const accountApi = createApi({
	reducerPath: 'account',
	baseQuery: baseQueryWithReauth({ baseUrl: API_CONFIG.ACCOUNT_BASE_URL }),
	endpoints: builder => ({
		getMyAccount: builder.query<IMAccount, void>({
			query: () => ({ url: API_CONFIG.ACCOUNT_MY_ACCOUNT_URL })
		})
	})
})

export const { useLazyGetMyAccountQuery } = accountApi;
export default accountApi;
