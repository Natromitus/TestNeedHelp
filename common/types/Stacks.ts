type PublicStackParamList = {
	SignIn: undefined;
	SignUp: undefined;
	ForgotPassword: undefined;
}

type ProtectedStackParamList = {
	ViewStack?: undefined;
}

type UserStackParamList = {
	Home: undefined;
}

// Shared screens:
// Organization: { id: number };
// Event: { id: number };

type HomeStackParamList = {
	Home: undefined;
	Organization: { id: number };
	Event: { id: number };
}

type SavedStackParamList = {
	Saved: undefined;
	Organization: { id: number };
	Event: { id: number };
}

type ExploreStackParamList = {
	Explore: undefined;
	Organization: { id: number };
	Event: { id: number };
}

type TicketsStackParamList = {
	Tickets: undefined;
	Ticket: { id: number };
	Organization: { id: number };
	Event: { id: number };
}

type UserProfileStackParamList = {
	UserProfile: undefined;
	UserProfileEdit: undefined;
	UserProfilePersonalInformation: undefined;
	UserProfilePaymentAndPayouts: undefined;
	UserProfileLanguage: undefined;
	UserProfileNotifications: undefined;

	CreateOrganizationStack: undefined;
	UserOrganizations: undefined;
	LearnAboutOrganizations: undefined;
}

type CreateOganizationStackParamList = {
	UpdateEmail: undefined;
	VerifyEmail: undefined;
	VerifyIdentity: undefined;
	ChooseID: undefined;
	ProcessingDocuments: undefined;
	CreateOrganizatonBase: undefined;
	CreateOrganizationContact: undefined;
}

type OrganizationStackParamList = {
	DashboardStack: undefined;
	OrganizationEventsStack: undefined;
	ScanTicketStack: undefined;
	InsightsStack: undefined;
	OrganizationProfileStack: undefined;
}

type DashboardStackParamList = {
	Dashboard: undefined;
}

type OrganizationEventsStackParamList = {
	OrganizationEvents: undefined;
	CreateEvent: undefined;
	OrganizationEvent: undefined;
	OrganizatioEventEdit: undefined;
	OrganizationEventInsights: undefined;
}

type ScanTicketStackParamList = {
	ScanTicket: undefined;
	TicketScanned: undefined;
	Organization: { id: number };
	Event: { id: number };
}

type InsightsStackParamList = {
	Insights: undefined;
}

type OrganizationProfileStackParamList = {
	OrganizationProfile: undefined;
	OrganizationProfileEdit: undefined;
	OrganizationProfilePersonalInformations: undefined;
	OrganizationProfilePaymentAndPayouts: undefined;
	OrganizationProfileSubscriptions: undefined;
	MembersStack: undefined;
}

type MembersStackParamList = {
	Members: undefined;
	MembersAdd: undefined;
	MembersEdit: undefined;
}

export type { PublicStackParamList };
export type { ProtectedStackParamList };
export type { UserStackParamList };
export type { OrganizationStackParamList };
export type { HomeStackParamList };
export type { SavedStackParamList };
export type { ExploreStackParamList };
export type { TicketsStackParamList };
export type { UserProfileStackParamList };
export type { CreateOganizationStackParamList };
export type { DashboardStackParamList };
export type { OrganizationEventsStackParamList };
export type { ScanTicketStackParamList };
export type { InsightsStackParamList };
export type { OrganizationProfileStackParamList };
export type { MembersStackParamList };
