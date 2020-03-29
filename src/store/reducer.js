const initialState = {
	counter: 0
}


const reducer = (state = initialState, action) => {
	if (action.type === 'INCREMENT') {
		return {
			counter: state.counter + 1
		}
	}

	if (action.type === 'DECREMENT') {
		return {
			counter: state.counter - 1
		}
	}


	if (action.type === 'ADD') {
		return {
			// counter: state.counter + 10
			counter: state.counter + 11
		}
	}

	if (action.type === 'SUBTRACT') {
		return {
			// counter: state.counter - 8
			 counter: state.counter - 9
		}
	}

    // DECREMENT
    // ADD
    // SUBTRACT




	return state;

};

export default reducer;