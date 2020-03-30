const initialState = {
	counter: 0,
	results: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
    	case 'INCREMENT': 
    	return {
			counter: state.counter + 1
		}

		case 'DECREMENT':

		return {
			counter: state.counter - 1
		}

		case 'ADD':
		return {
			
			counter: state.counter + action.val

		}

		case 'SUBTRACT':
		return {

			 counter: state.counter - action.val
		}




    }


    	return state;

};

export default reducer;



	// if (action.type === 'INCREMENT') {
	// 	return {
	// 		counter: state.counter + 1
	// 	}
	// }

	// if (action.type === 'DECREMENT') {
	// 	return {
	// 		counter: state.counter - 1
	// 	}
	// }


	// if (action.type === 'ADD') {
	// 	return {
	// 		// counter: state.counter + 10
	// 		// counter: state.counter + 11
	// 		counter: state.counter + action.val

	// 	}
	// }

	// if (action.type === 'SUBTRACT') {
	// 	return {
	// 		// counter: state.counter - 8
	// 		 // counter: state.counter - 9
	// 		 counter: state.counter - action.val
	// 	}
	// }

    // DECREMENT
    // ADD
    // SUBTRACT




// 	return state;

// };

// export default reducer;