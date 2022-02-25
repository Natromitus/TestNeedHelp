import { createEnum } from "../../common/helpers/TypeScript";

const ScreenNames = createEnum({
	SignIn: "SignIn",
	SignUp: "SignUp",
	ForgotPassword: "ForgotPassword",

	ViewStack: "ViewStack",
	Organization: "Organization",
	Event: "Event",

	HomeStack: "HomeStack",
	Home: "Home",

	SavedStack: "SavedStack",
	Saved: "Saved",

	ExploreStack: "ExploreStack",
	Explore: "Explore",

	TicketsStack: "TicketsStack",
	Tickets: "Tickets",
	Ticket: "Ticket",

	UserProfileStack: "UserProfileStack",
	UserProfile: "UserProfile",
	UserProfileEdit: "UserProfileEdit",
	UserProfilePersonalInformation: "UserProfilePersonalInformation",
	UserProfilePaymentAndPayouts: "UserProfilePaymentAndPayouts",
	UserProfileLanguage: "UserProfileLanguage",
	UserProfileNotifications: "UserProfileNotifications",

	CreateOrganizationStack: "CreateOrganizationStack",
	UpdateEmail: "UpdateEmail",
	VerifyEmail: "VerifyEmail",
	VerifyIdentity: "VerifyIdentity",
	ChooseID: "ChooseID",
	ProcessingDocuments: "ProcessingDocuments",
	CreateOrganizatonBase: "CreateOrganizatonBase",
	CreateOrganizationContact: "CreateOrganizationContact",
	UserOrganizations: "UserOrganizations",
	LearnAboutOrganizations: "LearnAboutOrganizations",

	Feedback: "Feedback",
	TermsOfService: "TermsOfService",
	PrivacySettings: "PrivacySettings",

	DashboardStack: "DashboardStack",
	Dashboard: "Dashboard",

	OrganizationEventsStack: "OrganizationEventsStack",
	OrganizationEvents: "OrganizationEvents",
	CreateEvent: "CreateEvent",
	OrganizationEvent: "OrganizationEvent",
	OrganizatioEventEdit: "OrganizatioEventEdit",
	OrganizationEventInsights: "OrganizationEventInsights",

	ScanTicketStack: "ScanTicketStack",
	ScanTicket: "ScanTicket",
	TicketScanned: "TicketScanned",

	InsightsStack: "InsightsStack",
	Insights: "Insights",

	OrganizationProfileStack: "OrganizationProfileStack",
	OrganizationProfile: "OrganizationProfile",
	OrganizationProfileEdit: "OrganizationProfileEdit",
	OrganizationProfilePersonalInformations: "OrganizationProfilePersonalInformations",
	OrganizationProfilePaymentAndPayouts: "OrganizationProfilePaymentAndPayouts",
	OrganizationProfileSubscriptions: "OrganizationProfileSubscriptions",

	MembersStack: "MembersStack",
	Members: "Members",
	MembersAdd: "MembersAdd",
	MembersEdit: "MembersEdit"
});

export default ScreenNames;
