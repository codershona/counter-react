export const updateObject = (oldObject, updatedValues) => {
	return {
		...oldObject,
		// counter: state.counter - action.val
		...updatedValues
	}
};