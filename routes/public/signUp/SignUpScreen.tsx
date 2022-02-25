import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tiConfig from '../../../app/configs/testIdsConfig.json';
import { PublicStackParamList } from '../../../common/types/Stacks';
import ScreenNames from '../../../app/configs/routerConfig';
import { LocalizationContext } from '../../../app/localization';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './SignUpStyles';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { useSignUpMutation } from '../../../features/user/authSlice';
import { SignUpRequest } from '../../../common/types/Auth';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from "yup";
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { mapErrors } from '../../../common/helpers/utils';

type SignUpNavigationProp = CompositeNavigationProp<
	StackNavigationProp<PublicStackParamList, typeof ScreenNames.SignUp>,
	StackNavigationProp<PublicStackParamList>
>;

const SignUpScreen: React.FC = () => {
	const { translations } = useContext(LocalizationContext);
	const [signUp, { isLoading }] = useSignUpMutation();
	const navigation = useNavigation<SignUpNavigationProp>();
	const [serverError, setServerError] = useState<string>("");

	const initialValues: SignUpRequest = {
		name: '',
		email: '',
		password: ''
	};

	const validationSchema = Yup.object({
		name: Yup.string()
			.required(translations['required'])
			.max(15, ({max}) => translations.formatString(
				translations['validationNCharOrLess'], { n: max })),
		email: Yup.string()
			.required(translations['required'])
			.email(translations['invalidEmail']),
		password: Yup.string()
			.required(translations['required'])
			.min(6, ({min}) => translations.formatString(
				translations['validationNCharOrMore'], { n: min }))
			.max(30, ({max}) => translations.formatString(
				translations['validationNCharOrLess'], { n: max }))
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
				translations['passwordFormat'])
	});

	const handleSignIn = () => navigation.navigate(ScreenNames.SignIn);
	const handleSubmit = async (values: SignUpRequest, formikHelpers: FormikHelpers<SignUpRequest>) => {
		formikHelpers.setSubmitting(true);
		setServerError("");

		await signUp(values)
			.unwrap()
			.catch(e => {
				if ('data' in e && e.data.errors)
					formikHelpers.setErrors(mapErrors(e.data.errors));
				else
					setServerError(translations['somethingWentWrongTryAgainLater']);
			})
			.finally(() => formikHelpers.setSubmitting(false));
	}

	return (
		<SafeAreaView
			testID={tiConfig.SAFE_AREA_VIEW}
			style={{ flex: 1 }}>
			<View
				testID={tiConfig.SIGN_UP_SCREEN}
				style={styles.container}>
				<View>
					<Text>{translations['signUp']}</Text>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}>
						{
							({ values, errors, handleSubmit, handleChange }) => (
								<View>
									<Input
										testID={tiConfig.SIGN_UP_USERNAME_INPUT}
										value={values.name}
										placeholder={translations['username']}
										onChangeText={handleChange('name')}
										errorMessage={errors.name} />
									<Input
										testID={tiConfig.SIGN_UP_EMAIL_INPUT}
										value={values.email}
										placeholder={translations['email']}
										onChangeText={handleChange('email')}
										errorMessage={errors.email} />
									<Input
										testID={tiConfig.SIGN_UP_PASSWORD_INPUT}
										value={values.password}
										placeholder={translations['password']}
										onChangeText={handleChange('password')}
										errorMessage={errors.password}
										secureTextEntry />
									{
										serverError ?
											<View>
												<Text>{serverError}</Text>
											</View>
											: null
									}
									<Button
										testID={tiConfig.SIGN_UP_SUBMIT}
										title={translations['signUp']}
										onPress={handleSubmit}
										loading={isLoading} />
								</View>
							)
						}
					</Formik>
				</View>
				<View style={styles.signInContainer}>
					<Text>{translations['alreadyHaveAnAccount']} </Text>
					<Text
						testID={tiConfig.SIGN_UP_SIGN_IN_NAVIGATE}
						style={styles.signInText}
						onPress={handleSignIn}>
						{translations['signIn']}
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}


export default SignUpScreen;
