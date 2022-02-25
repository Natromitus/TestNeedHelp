const mapErrors = (errors: any) => {
	const transformedEntries = Object.entries(errors).map(
		([k, v]: [any, any]) => [k.charAt(0).toLowerCase() + k.slice(1), v[0]]);

	return Object.fromEntries(transformedEntries);
}

export { mapErrors };
