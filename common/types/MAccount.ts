interface IMAccount {
	id: number;
	name: string;
	fullName: string;
	email: string;
	pictureUrl: string;
	emailSecured: boolean;
	permissions: string;
	orgOwner: number[];
	orgMember: number[];
	orgPending: number[];
}

export default IMAccount;
