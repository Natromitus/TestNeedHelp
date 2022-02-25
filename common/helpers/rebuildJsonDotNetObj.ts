function rebuildJsonDotNetObj(obj: any)
{
	var arr: any = [];
	buildRefArray(obj, arr);
	return setReferences(obj, arr);
}

function buildRefArray(obj: any, arr: any)
{
	if (!obj || obj['$ref'])
		return;

	var objId = obj['$id'];
	if (!objId)
	{
		obj['$id'] = "x";
		return;
	}

	var id = parseInt(objId);
	var array = obj['$values'];

	if (array && Array.isArray(array))
	{
		arr[id] = array;
		array.forEach(function (elem) {
			if (typeof elem === "object")
				buildRefArray(elem, arr);
		});
	}
	else
	{
		arr[id] = obj;
		for (var prop in obj)
		{
			if (typeof obj[prop] === "object")
				buildRefArray(obj[prop], arr);
		}
	}
}

function setReferences(obj: any, arrRefs: any)
{
	if (!obj)
		return obj;

	var ref = obj['$ref'];
	if (ref)
		return arrRefs[parseInt(ref)];

	// Already visited
	if (!obj['$id'])
		return obj;

	var array = obj['$values'];
	if (array && Array.isArray(array))
	{
		for (var i = 0; i < array.length; ++i)
			array[i] = setReferences(array[i], arrRefs);

		return array;
	}
	for (var prop in obj)
	{
		if (typeof obj[prop] === "object")
			obj[prop] = setReferences(obj[prop], arrRefs)
	}

	delete obj['$id'];
	return obj;
}

export default rebuildJsonDotNetObj;
