const initialState = {
	counter: 0,
	results: []
};


const reducer = ( state = initialState, action ) => {
    switch (action.type) {
    	case 'INCREMENT': 
          const newState = Object.assign({}, state);
          newState.counter = state.counter + 1;

          return newState;

  //   	return {
		// 	counter: state.counter + 1
		// }

		case 'DECREMENT':

		return {
			...state,

			counter: state.counter - 1
		}

		case 'ADD':
		return {
			...state,

			counter: state.counter + action.val

		}

		case 'SUBTRACT':
		return {
			...state,

			 counter: state.counter - action.val
		}

		case 'STORE_RESULT':
		return {
			...state,

			results: state.results.concat({id: new Date(), value: state.counter})

			// results: state.results.push()
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