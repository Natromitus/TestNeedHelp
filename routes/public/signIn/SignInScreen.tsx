import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSignInMutation } from '../../../features/user/authSlice';
import tiConfig from '../../../app/configs/testIdsConfig.json';
import styles from './SignInStyles';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from "yup";
import { SignInRequest } from '../../../common/types/Auth';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { mapErrors } from '../../../common/helpers/utils';

const SignInScreen: React.FC = () => {
	const [signIn, { isLoading, isError }] = useSignInMutation();

	const initialValues: SignInRequest = {
		name: '',
		password: ''
	};

	const validationSchema = Yup.object({
		name: Yup.string()
			.required("Required")
			.max(15, ({max}) => "15 or more"),
		password: Yup.string()
			.required("Required")
	});

	const handleSubmit = async (values: SignInRequest, formikHelpers: FormikHelpers<SignInRequest>) => {
		await signIn(values)
			.unwrap()
			.catch(e => {
				if ('data' in e && e.data &&
					'errors' in e.data && e.data.errors)
				{
					formikHelpers.setErrors(mapErrors(e.data.errors));
				}
			})
	}

	return (
		<SafeAreaView
			testID={tiConfig.SAFE_AREA_VIEW}
			style={{ flex: 1 }}>
			<View
				testID={tiConfig.SIGN_IN_SCREEN}
				style={styles.container}>
				<View>
					<Text>Sign in</Text>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}>
						{
							({ values, errors, handleSubmit, handleChange }) => (
								<View>
									<Input
										testID={tiConfig.SIGN_IN_USERNAME_INPUT}
										value={values.name}
										placeholder={"Username"}
										onChangeText={handleChange('name')}
										errorMessage={errors.name} />
									<Input
										testID={tiConfig.SIGN_IN_PASSWORD_INPUT}
										value={values.password}
										placeholder={"Username"}
										onChangeText={handleChange('password')}
										errorMessage={errors.password}
										secureTextEntry />
									{
										isError ?
											<View>
												<Text testID={tiConfig.SIGN_IN_SERVER_ERROR}>
													Something went wrong try again later
												</Text>
											</View>
											: null
									}
									<Button
										testID={tiConfig.SIGN_IN_SUBMIT}
										title={"Sign in"}
										onPress={handleSubmit}
										loading={isLoading} />
								</View>
							)
						}
					</Formik>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default SignInScreen;
