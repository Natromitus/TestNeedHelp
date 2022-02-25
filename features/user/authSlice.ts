import { createApi } from "@reduxjs/toolkit/query/react";
import API_CONFIG from '../../app/configs/apiConfig.json';
import baseQueryWithReauth from "../../common/fetchBaseQueryReauth";
import { ForgotPasswordRequest, SignInRequest } from '../../common/types/Auth';
import IMAccount from "../../common/types/MAccount";

const authApi = createApi({
	reducerPath: 'auth',
	baseQuery: baseQueryWithReauth({ baseUrl: API_CONFIG.ACCOUNT_BASE_URL }),
	endpoints: builder => ({
		signUp: builder.mutation<IMAccount, SignInRequest>({
			query: (obj) => ({
				url: API_CONFIG.ACCOUNT_REGISTER_URL,
				method: "POST",
				body: obj
			})
		}),
		signIn: builder.mutation<IMAccount, SignInRequest>({
			query: (obj) => ({
				url: API_CONFIG.ACCOUNT_LOGIN_URL,
				method: "POST",
				body: obj,
			})
		}),
		forgotPassword: builder.mutation<undefined, ForgotPasswordRequest>({
			query: (obj) => ({
				url: `${API_CONFIG.ACCOUNT_FORGOT_PASSWORD_URL}/${obj.email}`,
				method: "POST",
			})
		})
	})
})

export const { useSignUpMutation, useSignInMutation, useForgotPasswordMutation } = authApi;
export default authApi;
