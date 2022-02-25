type SignInRequest = {
	name: string;
	password: string;
}

type SignUpRequest = {
	name: string;
	email: string;
	password: string;
}

type ForgotPasswordRequest = {
	email: string;
}

export type { SignInRequest };
export type { SignUpRequest };
export type { ForgotPasswordRequest };
